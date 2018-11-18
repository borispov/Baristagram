const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { CommentSchema } = require('./Post')

const UserPosts = new Schema({
  postid: {
    type: String,
    required: true
  },
  display_src: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  likes: {
    type: Number, 
    default: 0
  },
  comments: [CommentSchema]
})

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  UserPosts: [UserPosts],
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model("users", UserSchema)

module.exports = User