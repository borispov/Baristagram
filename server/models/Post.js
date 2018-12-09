const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const PostSchema = new Schema({
  // postid: {
  //   type: String,
  //   required: true
  // },
  image: {
    pathToFile: String,
    data: Buffer,
    contentType: String
  },
  userid: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  caption: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [CommentSchema]
})

const Post = mongoose.model("posts", PostSchema)

module.exports = Post