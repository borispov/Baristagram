const axios = require('axios')
const paths = require('../../config/paths.js')

const handleForm = (firstName, lastName, password, email) => {
  let validName = isValidName(firstName, lastName)
  if (!validName) throw new TypeError('Name Should Contain Characters Only')
  passwordCheck(password)

  const data = {
    firstName, 
    lastName,
    password,
    email
  }

  axios.post(paths.register, data)
}

function isValidName(first, last) {
  return /^[a-z]+$/i.test(first, last)
}

function passwordCheck(pw) {
  if (pw.length < 6) throw new Error("password is less than 6 characters...")
}