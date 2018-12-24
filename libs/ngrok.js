require('dotenv').config()
const ngrok = require('ngrok');

(async function() {
  const url = await ngrok.connect({
    proto: 'http', // http|tcp|tls, defaults to http
    addr: 3000, // port or network address, defaultst to 80
    subdomain: 'ouistiti', // reserved tunnel name https://alex.ngrok.io
    authtoken: process.env.NGROK_AUTH_TOKEN, // your authtoken from ngrok.com
    region: 'eu', // one of ngrok regions (us, eu, au, ap), defaults to us
  });
})();
