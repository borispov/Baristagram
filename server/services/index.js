const Post = require('../models/Post')
const User = require('../models/User')
const PostService = require('./PostService')

const postService = new PostService(Post)


module.exports = postService