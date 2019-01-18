const express = require('express')
const router = express.Router()
const path = require('path')
const postService = require('../services')
const mongoose = require('mongoose')


const sharp = require('sharp');

const resize = require('../services/resize')
const Post = require('../models/Post')

const BASE64 = 'base64'

mongoose.set('useFindAndModify', false);

router.post('/api/addAvatar', async (req, res) => {

  const { username } = req.body
  const upload = req.files.file
  const ext = upload.name.split('.')[1]
  const fileName = `${username}.${ext}`

  const response = await postService.addAvatar(upload, fileName, username)
  if (response instanceof Error) {
    return res.status(400).json(response.message)
  }
  return res.status(200).json('avatar uploaded successfuly')
})

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

  Post.find({ author: user }).sort('-date')
    .then(posts => {
      const newPostsArray = posts.map(post => {
        // let d = post.image.data.toString('base64')
        return {...post, image: {...post.image}}
      })
      res.json(newPostsArray)
    })
    .catch(err => res.json(err))
})

router.get('/api/fetchPhotos', (req, res, next) => {
  console.log('Fetching Photos')
  Post.find({}).sort('-date').limit(10)
    .then(data => {
      return res.json(data)
    })
    .catch(err => console.error(err))
})

router.post('/api/addComment', (req, res, next) => {
  console.log('Adding A Comment to Post in DB')
  const message = { author, comment } = req.body

  Post.findOneAndUpdate({_id: req.body.postID}, {$push: {comments: message}})
  .then(posts => res.json(req.body))
  .catch(err=> err)
})

router.post('/api/removeComment', (req, res, next) => {
  console.log('---removing comment---')
  const {postID, comID} = req.body
  Post.updateOne({_id: postID}, {$pull: {"comments": { _id: comID} }})
    .then(data => res.json(data))
    .catch(error => console.log('error has happened:  ', err))
})

router.post('/api/removeLike', async (req, res, next) => {
  console.log('--- removing a like')
  const { postID, userDeliking } = req.body

  const conditions = {
    _id: postID,
    likeList: {$eq: userDeliking}
  }

  const theUpdate = {
    $inc: {likes: -1}, 
    $pull: {likeList: userDeliking} 
  }

  Post.findOneAndUpdate(conditions, theUpdate) 
    .then(d => res.json(d))
    .catch(err => res.json(err))
})

router.post('/api/addLike', (req, res, next) => {
  console.log('-----likin a photo Yo!')
  const { postID, userLiking } = req.body

  // TODO export all this functionality to a POSTS Service class. ALL GET/POSTS/PUT/ETC requests
  const conditions = {
    _id: postID,
    likeList: {$ne: userLiking}
  }

  const theUpdate = {
    $inc: {likes: 1}, 
    $push: {likeList: userLiking } 
  }
  
  Post.findOneAndUpdate(conditions, theUpdate, (err, doc) => {
    if (err) {
      console.log(`error occured in query: : : ${err}`)
      return res.status(400).json(`Perhaps wrong Query ${err}`)
    } else if (doc === null) {
      return res.status(204).json('perhaps already liked by user')
    }
    console.log('-- LIKE success -- !')
    return res.status(200).json(doc)
  })

})

module.exports = router