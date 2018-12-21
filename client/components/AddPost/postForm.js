const formData = async (file, userdata, caption, isAvatar, otherStuff) => {

  const data = new FormData()

  // let notAvatar
  // if (isAvatar !== undefined && isAvatar === 'avatar') {
  //   notAvatar = false
  // } else {
  //   notAvatar = true
  // }

  const { name, email, password } = otherStuff

  if (isAvatar === 'avatar') {
    console.log('sdfsdfsdfsdsdf')
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
  }

  if (userdata !== null) {
    const { username, user_id } = userdata
    data.append('username', username)
  }

  data.append('file', file, file.name)

  if (isAvatar !== 'avatar') {
    data.append('userid', user_id)
    data.append('caption', caption)
  }


  return data
}

module.exports = formData