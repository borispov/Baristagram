const express = require('express')
const session = require('express-session')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const sharp = require('sharp');
const postService = require('../services')
const resize = require('../services/resize')

const SALT_R = 10
const User = require('../models/User')

router.post('/api/register', async (req, res) => {

  console.log('GoGoGo!')
  const { errors, isValid } = validateRegisterInput(req.body)
  const { email, name, password } = req.body
  const avatar = req.files.file
  const userName = name.replace(/ /g, '_')  
  
  const response = await postService.addAvatar(avatar.data, name)
  const postPath = `/files/${userName}.png`

  if (response instanceof Error) {
    return res.status(400).json(response.message)
  }

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
      // const avatarPath = user.postPath
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            }
            jwt.sign(payload, 'secret', {expiresIn: 3600}, (err, token) => {
              console.log(user.postPath)
              err ? console.error('error', err) : res.json({
                avatarPath: user.postPath,
                success: true,
                token: `Bearer ${token}`
              })
            })
          } else {
              console.log('not a match?')
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