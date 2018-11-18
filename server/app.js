const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const app = express()

const users = require('./routes/userRoutes')

app.disable("x-powered-by")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./passport')(passport)

app.use('/', users)

app.use(express.json()) 
app.use(express.static(path.join(__dirname, ".." , "dist")))
app.post('/register', (req, res) => {
  const postedData = req.data
})

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

const PORT = '3002'

app.listen(PORT, (err) => {
  if (err) console.log(`Oops! ${err}`)
  console.log(`Listening on PORT: ${PORT}`) 
})


module.exports = app