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
  postid: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  // display_src: {
  //   type: String,
  //   required: true
  // },
  userid: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  caption: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [CommentSchema]
})

const Post = mongoose.model("posts", PostSchema)

module.exports = Post