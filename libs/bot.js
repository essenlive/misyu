'use strict';
const BootBot = require('bootbot');
const pyPrint = require('./pyPrint.js')
const downloadIMG = require('./downloadIMG.js')
const download = require('image-downloader')

require('dotenv').config()

const bot = new BootBot({
  accessToken: process.env.ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET
})

bot.on('message', (payload, chat) => {
  chat.say(`Merci pour ton message !`);

  const text = payload.message.text;
  console.log('MESSAGE ::', text);
  pyPrint.message(text)
});

bot.on('attachment', (payload, chat) => {
  chat.say(`Belle photo !`);

  const imageUrl = payload.message.attachments[0].payload.url;
  console.log('ATTACHMENT ::', imageUrl);

  const options = {
    url: imageUrl,
    dest: './files/received.jpg'
  }

  async function downloadIMG(options) {
    try {
      const { filename, image } = await download.image(options)
      console.log("Downloaded Image", filename);
      pyPrint.image(filename)
    } catch (e) {
      console.log(e);
    }
  }

  downloadIMG(options);

});




bot.start();
