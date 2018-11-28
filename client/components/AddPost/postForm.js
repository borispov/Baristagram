const formData = async (file, userdata, caption) => {
  const data = new FormData()
  const { username, user_id } = userdata

  data.append('file', file, file.name)
  data.append('username', username)
  data.append('userid', user_id)
  data.append('caption', caption)

  return data
}

module.exports = formData