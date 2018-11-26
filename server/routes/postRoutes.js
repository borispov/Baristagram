const express = require('express')
// const express-fileupload = require('express-fileupload')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
// import Post model
const Post = require('../models/Post')

router.post('/api/addphoto', (req, res, next) => {
  console.log('-------------------------------')
  console.log('--- insde POST PHOTO route --- ')
  console.log('-------------------------------')
  
  const {userid, username } = req.body

  const upload = req.files.file
  const fileData = req.files.file.data
  const contentType = upload.mimetype
  const ext = req.files.file.name.split('.')[1]
  const fileTo64 = fileData.toString('base64')
  let b64toB = Buffer.from(fileTo64, 'base64')
  const fileName = `${req.files.file.name}_${Date.now()}.${ext}`
  const caption = req.body.caption || ''
  // add image to DB
  
  const newPost = new Post({
    postid: '1234999241239',
    image: {
      data: fileData,
      contentType: contentType
    },
    author: username,
    userid: userid,
    caption: caption,
    comments: []
  })
  newPost.save().then(res => console.log(res)).catch(err => console.log(err))
  console.log(newPost)

  upload.mv(path.join(__dirname, '..', '..', 'public', 'files', fileName), (err) => {
    if (err) return res.status(500).send(err)
    return res.json({ file: `public/${req.files.file.name}` })
  })
})

module.exports = router