// generate random img using unsplash. for dummy data usage
var axios = require('axios')

const getPhoto = async (width, height) => {
  const URL = `https://source.unsplash.com/collection/1163637/${width}x${height}`
  const fetchedRes = await axios.get(URL)
  console.log(fetchedRes.request.res)
}

getPhoto(45,45)

// console.log(res)