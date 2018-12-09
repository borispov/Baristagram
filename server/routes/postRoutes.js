const express = require('express')
const router = express.Router()
const path = require('path')
const postService = require('../services')

const Post = require('../models/Post')

const BASE64 = 'base64'

router.post('/api/addphoto', async (req, res, next) => {

  console.log('--- insde POST PHOTO route --- ')
  const {userid, username } = req.body
  const caption = req.body.caption || ''

  const upload = req.files.file
  const ext = req.files.file.name.split('.')[1]

  const response = await postService.addPost(upload, ext, username,userid, caption)
  res.json({response})
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

router.get('/api/fetchPhotos', (req, res, next) => {
  console.log('hiiii fetcher')
  Post.find({}).sort('-date').limit(10)
    .then(data => {
      return res.json(data)
    })
    .catch(err => console.error(err))
})

router.post('/api/addComment', (req, res, next) => {
  console.log('Adding A Comment to Post in DB')
  const message = { author, comment } = req.body

  // Experimenting with $push mongo command.. trying to update a certain field within the Database. 
  Post.findOneAndUpdate({_id: req.body.postID}, {$push: {comments: message}})
  .then(posts => res.json(req.body))
  .catch(err=> err)
})

router.post('api/removeComment', (req, res, next) => {
  console.log('---removing comment---')
  const {postID, index} = req.body

  Post.findOneAndDelete({_id})

})

module.exports = router