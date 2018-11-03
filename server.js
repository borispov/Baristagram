const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "dist")))

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

const port = '3002';

app.listen(port, (err) => {
  if (err) console.log(`Oops! ${err}`)
  console.log(`Listening on port: ${port}`) 
})