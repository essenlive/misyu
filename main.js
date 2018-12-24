const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({ io: new Raspi() });
const Camera = require("./libs/camera.js")

const pyPrint = require("./libs/pyPrint.js")

const trigger = async() => {
  const fullFileName = `${__dirname}/files/${Date.now()}.jpg`;

  const picture = await Camera( fullFileName );
  await console.log( "Picture taken", picture );
  await print(fullFileName, picture)

}


board.on('ready', () => {
  var button = new five.Button({ pin : 4, isPulldown : true });

  button.on("release", function() {
    console.log( "Button released" );
    trigger();
  });

});
