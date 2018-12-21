const fs = require('fs')
const sharp = require('sharp');

const transform = sharp()

module.exports = function resize(path, format, width, height) {
  const readStream = fs.createReadStream(path);
  return readStream
}