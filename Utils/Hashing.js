const hash = (deci) => {
  const s = "012345689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var hash_str = ""
  while (deci > 0) {
    hash_str = s[deci % 62] + hash_str
    deci /= 62
  }
  return hash_str
}

module.exports = { hash }
