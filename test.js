const takePicture = require('./libs/takePicture.js')

const fileName = `${Date.now()}.jpg`;
const fullFileName = `${__dirname}/files/send/${fileName}`;

console.log( "BUTTON PRESSED ::" );

takePicture(fullFileName).then((res)=>{
  console.log( "PICTURE TAKEN ::" );
})
