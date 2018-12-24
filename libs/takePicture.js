/////////////////////////////////////////////////////
/// Pi Camera picture module
////// Takes picture and stores them locally
/////////////////////////////////////////////////////
const PiCamera = require('pi-camera');

const takePicture = async (fileName) =>{
    console.log('TAKEPICTURE ::');
    const myCamera = new PiCamera({
        mode: 'photo',
        output: fileName,
        width: 384,
        height: 384,
        rotation: 270,
        nopreview: true,
      });
    myCamera.snap() // Should be: await myCamera.snap()

    // UGLY : I don't know why my promise does not resolve while used in ./main.js
    // This timer is an ugly workaround
    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    await wait(8000);

    return true
}
//
module.exports = takePicture;
