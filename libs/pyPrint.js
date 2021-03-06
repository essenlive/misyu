/////////////////////////////////////////////////////
/// Node library to call for python thermal printer
//////
/////////////////////////////////////////////////////

let {PythonShell} = require('python-shell')

 let options = {
   mode: 'text',
   pythonPath: '/usr/bin/python2.7',
   pythonOptions: ['-u'], // get print results in real-time
   scriptPath: '/home/pi/.local/lib/python2.7/site-packages',
 };

const pyPrint = {
   message : ( message ) => {
     options.args = [message];
     console.log("PRINT MESSAGE :: ", message );
     PythonShell.run(`../../../../misyu/libs/pyPrint/print_message.py`, options, function (err) { if (err) throw err;  })
     return true
   },
  image : ( imagePath ) => {
    options.args = [imagePath];
    console.log("PRINT PICTURE :: ", imagePath );
    PythonShell.run(`../../../../misyu/libs/pyPrint/print_image.py`, options, function (err) { if (err) throw err; })
   return true
  }
};

module.exports = pyPrint;
