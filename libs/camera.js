const PiCamera = require('pi-camera');

const Camera = async( fileName )=> {
  const myCamera = new PiCamera({
    mode: 'photo',
    output: fileName,
    width: 384,
    height: 384,
    rotation: 270,
    nopreview: true,
  });
  const result = await myCamera.snap()
  return true;
}

module.exports = Camera;
