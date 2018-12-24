/////////////////////////////////////////////////////
/// Starts an ngrok tunnel
//////
/////////////////////////////////////////////////////
const ngrok = require('ngrok');

const startTunnel = async function() {
  const url = await ngrok.connect({
    proto: 'http', // http|tcp|tls, defaults to http
    addr: process.env.PORT_BOT, // port or network address, defaultst to 80
    subdomain: process.env.NGROK_DOMAIN, // reserved tunnel name https://alex.ngrok.io
    authtoken: process.env.NGROK_AUTH_TOKEN, // your authtoken from ngrok.com
    region: process.env.NGROK_REGION, // one of ngrok regions (us, eu, au, ap), defaults to us
  });
};

module.exports = startTunnel;
