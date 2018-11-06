// maybe fetch actual images from a particular Instagram User. 

const defaultSizes = '450x450'
const randomURL = 'https://source.unsplash.com/random/'
const defaultNumberOfPics = 9

function randomSig(numOfPic = defaultNumberOfPics, size = defaultSizes) {
  let imgUrl = `${randomURL}${size}/?sig=`
  let picArray = []
  return assignImgUrl(numOfPic, imgUrl, picArray)
}

const assignImgUrl = (n, url, arr) => {
  if (arr.constructor !== Array) throw new TypeError(`${arr} is not an array, please provide an Array,`)
  if (typeof n !== 'number') throw new TypeError('value is not a number')

  if (n === 0 ) return arr

  else { 
    let k = n + 9
    arr.push(url + k)
    return assignImgUrl(n - 1, url, arr)
  }
}

module.exports = {
  randomSig
}