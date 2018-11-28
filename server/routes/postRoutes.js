const express = require('express')
// const express-fileupload = require('express-fileupload')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

const Post = require('../models/Post')

const BASE64 = 'base64'

router.post('/api/addphoto', (req, res, next) => {

  console.log('--- insde POST PHOTO route --- ')
  const {userid, username } = req.body

  const upload = req.files.file
  const fileData = req.files.file.data
  const contentType = upload.mimetype
  const ext = req.files.file.name.split('.')[1]
  const fileTo64 = fileData.toString(BASE64)
  let b64toB = Buffer.from(fileTo64, BASE64)
  const fileName = `${req.files.file.name}_${Date.now()}.${ext}`
  const caption = req.body.caption || ''
  // add image to DB
  
  const newPost = new Post({
    image: {
      data: fileTo64,
      contentType: contentType
    },
    author: username,
    userid: userid,
    caption: caption,
    comments: []
  })
  newPost.save().then(res => console.log('Success! Saved image to DB')).catch(err => console.log(err))

  // upload.mv(path.join(__dirname, '..', '..', 'public', 'files', fileName), (err) => {
  //   if (err) return res.status(500).send(err)
  //   return res.json({ file: `public/${req.files.file.name}` })
  // })
})


router.get('/api/getProfile/:user', (req, res, next) => {

  const { user } = req.params
  Post.find({ author: user})
    .then(posts => {
      const newPostsArray = posts.map(post => {
        let d = post.image.data.toString('base64')
        return {...post, image: {...post.image, data: d}}
      })
      res.json(newPostsArray)
    })
    .catch(err => res.json(err))
})

module.exports = router