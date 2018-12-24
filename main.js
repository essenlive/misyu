/////////////////////////////////////////////////////
/// Main process
//////
/////////////////////////////////////////////////////
require('dotenv').config()

const Raspi = require('raspi-io'); // The Johnny-five lib for raspis
const five = require('johnny-five'); // To easily interface with the button ( Clearly overkill )
const pyPrint = require("./libs/pyPrint.js") // Small Interface to use the python library for printing ( the node one sucks )
const BootBot = require('bootbot'); // Facebook boot server
const download = require('image-downloader') // Image downloader form url to local
const express = require('express') // express server to serve static files
const startTunnel = require('./libs/startTunnel') // The tunnel to have working webhook through NAT and all
const takePicture = require('./libs/takePicture.js') // Small helper to take pictures

startTunnel().then(()=> {
  console.log("TUNNEL STARTED ::");
  // Create johnny five board
  const board = new five.Board({ io: new Raspi() });
  // Parsing the userIds of the users to receive and send the pictures
  const userIds = process.env.USER_IDS.split(','); // Get list of authorized receivers

  board.on('ready', () => {
    // set up Johnny_five button
    let button = new five.Button({ pin : 4, isPulldown : true });

    // set up messenger bot server
    const bot = new BootBot({
      accessToken: process.env.ACCESS_TOKEN,
      verifyToken: process.env.VERIFY_TOKEN,
      appSecret: process.env.APP_SECRET
    })
    // ask express instance to expose files/send folder
    bot.app.use(express.static('./files/send'));
    // start bot instance
    bot.start(process.env.PORT_BOT);


    // Bot action on message received //
    ////////////////////////////////////
    bot.on('message', (payload, chat) => {
      chat.say(`Merci pour ton message !`) //answer to aknowledge reception;
      const text = payload.message.text; //get message content
      console.log('MESSENGER MESSAGE RECEIVED ::', text);
      pyPrint.message(text)   //Send message to thermal printer
    });

    // Bot action on picture received //
    ////////////////////////////////////
    bot.on('attachment', (payload, chat) => {
      chat.say(`Belle photo !`); //answer to aknowledge reception
      const imageUrl = payload.message.attachments[0].payload.url;  //get picture url
      console.log('MESSENGER PICTURE RECEIVED ::', imageUrl);
      downloadAndPrint({ url: imageUrl, dest: './files/received/last.jpg'});  //download picture to local folder and send to printer
      // declare download function
      async function downloadAndPrint(options) {
        try {
          const { filename, image } = await download.image(options) //wait for file download
          pyPrint.image(filename) //Send picture to thermal printer
          console.log("PICTURE DOWNLOADED ::", filename);
        } catch (e) {
          console.log("PICTURE DOWNLOAD ERROR ::", e);
        }
      }

    });

    // Trigger action on button press //
    ////////////////////////////////////
    button.on("release", function() {
      console.log( "BUTTON PRESSED ::" );

      const fileName = `${Date.now()}.jpg`;
      const fullFileName = `./files/send/${fileName}`;
      takePicture(fullFileName).then(()=>{
        console.log( "PICTURE TAKEN ::" );

        // Uncomment for photobooth mode ( directly print the picture taken )
        // pyPrint.image( `./files/send/${fullFileName}` );

        // Send photo by messenger
        userIds.forEach((el,i)=>{
          console.log('URL :: ', `https://${process.env.NGROK_DOMAIN}.${process.env.NGROK_REGION}.ngrok.io/${fileName}`);
          bot.say(el, {
              attachment: 'image',
              url: `https://${process.env.NGROK_DOMAIN}.${process.env.NGROK_REGION}.ngrok.io/${fileName}`
          }) //send message to authorized receivers
          console.log('MESSENGER PICTURE SENT ::', i);
        })

      });
    });

  });

});
