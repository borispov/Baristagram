export const generateCID = (lastCid) => {
  let cidNum, n

  if (!lastCid) {
    n = Math.floor(Math.random() * 10023)
    cidNum = n
  } else {
      n = lastCid
      if (typeof n === 'string') cidNum = n.match(/\d/g).join('')
      else cidNum = n
  }
  return `c_${cidNum++}`
}

