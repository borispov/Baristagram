const https = require('https')
const app = require('./server/app')
const mongoose = require('mongoose')
const db = require('./server/config/key').DB
const User = require('./server/models/User')

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('db connected'))
  .catch((err) => console.log('something happened ', err))



const PORT = '3000'

https.createServer(null, app).listen(process.env.PORT || PORT);

process.on("unhandledRejection", error => {
  console.error(error);
  process.exit(1);
});