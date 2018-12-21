const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

class PostService {
  constructor(PostModel) {
    this.PostModel = PostModel
    this.addPost = this.addPost.bind(this)
    this.addAvatar = this.addAvatar.bind(this)
  }

  async addPost(upload, ext, author, userid, caption) {
    const contentType = upload.mimetype
    const data = upload.data
    const fileName = `${author}_${Date.now()}.${ext}`
    const imagePath = path.join(__dirname ,'..', '..', 'public', 'files', fileName)
    const postPath = `/files/${fileName}`

    const comments = []
    const post = await new this.PostModel({
      image: { pathToFile: postPath, data, contentType },
      author, userid, caption, comments
    })
    post.save().then(res => {console.log('pic saved to DB!'); return res}).catch(err => console.log(err))

    upload.abortOnLimit

    await upload.mv(imagePath, (err) => {
      if (err) console.log('error', err)
      else console.log(`file: public/files/${fileName}`)
    })

    return post
  }

  async addAvatar(upload, fileName, username) {
    console.log('adding an avatar...')
    const imagePath = path.join(__dirname ,'..', '..', 'public', 'files', fileName)

    try {
      return sharp(upload, {
        failOnError: true
      })
      .resize({
        width: 150,
        height: 150
      })
      .toFile(imagePath, (err, resp) => {
        if (err) console.error(err)
        return resp
      })

    } catch (error) {
      console.log('error caught.')
      return error
    }

  
  }

  async getProfileImages(user) {

    let imageFiles = []
    Post.find({ author: user})
    .then(posts => {
      imageFiles = posts.map(post => {
        let d = post.image.data.toString('base64')
        return {...post, image: {...post.image, data: d}}
      })
      res.json(newPostsArray)
    })
    .catch(err => res.json(err))

  }

}

module.exports = PostService