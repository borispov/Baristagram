const formData = async (file, userdata, caption, isAvatar, otherStuff) => {

  const data = new FormData()

  if (isAvatar === 'avatar') {

    const { name, email, password } = otherStuff
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
  }

  if (userdata !== null) {
    const { username, user_id } = userdata
    data.append('username', username)
    data.append('userid', user_id)
    data.append('caption', caption)
  }

  data.append('file', file, file.name)

  // if (isAvatar !== 'avatar') {

  // }


  return data
}

module.exports = formData