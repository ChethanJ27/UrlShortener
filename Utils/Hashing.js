const hash = (deci) => {
  const s = "012345689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var hash_str = ""
  while (deci >= 1) {
    hash_str = s[deci % 62] + hash_str
    deci = Math.trunc(deci/62)
  }
  return hash_str
}

const convertUrlStringToInt = (url) => {
  return url.split('').map( (char) => {
    return char.charCodeAt(0);
  }).reduce((result,item) => {
    return result+item
  });
}

const generateShortUrlId = (longUrl) => { 
  const urlId = convertUrlStringToInt(longUrl)
  var randomnumber = Math.trunc(Math.random()*50000)
  console.log(randomnumber,urlId);
  randomnumber = randomnumber*urlId
  const hashid = hash(randomnumber)
  return hashid;
}

module.exports = { generateShortUrlId }
