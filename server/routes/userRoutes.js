const express = require('express')
const session = require('express-session')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const SALT_R = 10
const User = require('../models/User')

router.post('/api/register', async (req, res) => {

    console.log(req.files)
    console.log('GoGoGo!')
    const { errors, isValid } = validateRegisterInput(req.body)
    const { email, name, password, avatar } = req.body
    
    console.log(req.body)
    
    // console.log(req)
    // const ext = avatar.name.split('.')[1]
    // const fileName = `${name}.${ext}`
    // const imagePath = path.join(__dirname ,'..', '..', 'public', 'files', fileName)
    // await avatar.mv(imagePath, (err) => {
    //   if (err) console.log('error', err)
    //   else console.log(`file: public/files/${fileName}`)
    // })
    // const postPath = `/files/${fileName}`


    return null

    if (!isValid) return res.status(400).json(errors)

    console.log('-request is valid... proceeding.')

    User.findOne({ email: email })
      .then(user => {
        console.log(!user)
        if(user) res.status(400).json({email: 'Email already exists!'})
        else {
          const newUser = new User({
            name,
            email,
            password,
            postPath
          })

          bcrypt.genSalt(SALT_R, (err, salt) => {
            if (err) console.error('Error bCrypting: ', err)
            else {
              bcrypt.hash(newUser.password, salt, async (err,hash) => {
                if (err) console.error('err hashing...', err)
                else {
                  console.log('--creating new user ...')
                  newUser.password = hash
                  const user = await newUser.save().then(user => user)
                  res.json(user)
                }
              })
            }
          })
        }
      })    
})

router.post('/api/login', ( req, res ) => {
  console.log('---inside login Route')
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) return res.status(400).json(errors)

  const { email, password } = req.body

  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors)
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            }
            jwt.sign(payload, 'secret', {expiresIn: 3600}, (err, token) => {
              err ? console.error('error', err) : res.json({
                success: true,
                token: `Bearer ${token}`
              })
            })
          } else {
              errors.password = 'Incorrect Password';
              return res.status(400).json(errors);
          }
        })
    })
})

router.get('/api/users/me', passport.authenticate('jwt', { session: false }), (req, res) => {

  const { id, name, email} = req.user
  return res.json({
      id,
      name,
      email
  });
});


module.exports = router