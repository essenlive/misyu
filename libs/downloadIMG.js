const download = require('image-downloader')

async function downloadIMG(options) {
  try {
    const { filename, image } = await download.image(options)
    console.log("Downloaded Image");
    return filename
  } catch (e) {
    return false
  }
}

module.exports = downloadIMG;
