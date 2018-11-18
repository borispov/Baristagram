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
  id: {
    type: String,
    default: Date.now
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
  display_src: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
})

const Post = mongoose.model("Post", PostSchema)

module.exports = {
  Post,
  CommentSchema
}