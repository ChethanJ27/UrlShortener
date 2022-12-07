const { generateShortUrlId } =  require("../Utils/Hashing")
const {createShortUrl, getUrl, checkIfLongUrlExists}  = require("../Dao/UrlDao")
const {express} = require("express")

module.exports.createRandomShortUrl = async (req,res) => {
    console.log(req.body);
    const {longUrl} = req.body
    const shortUrl = generateShortUrlId(longUrl)
    const result = await createShortUrl(longUrl,shortUrl)
    if (result == undefined || result == null) {
        res.send(404).json(result)
    }
    res.send(201).json(result)
}

module.exports.getLongUrl = async (req,res) => {
    const {shortUrl} = req.query
    const result = await getUrl(shortUrl)
    if (result == undefined || result == null) {
        res.send(404).json(result)
    }
    res.json(result.rows[0])
}

module.exports.createCustomShortUrl = async (req,res) => {
    console.log(req.body);
    const {longurl, shorturl} = req.body
    const longUrlExists = await checkIfLongUrlExists(longurl)
    if (longUrlExists != null && longUrlExists.rowCount != 0 ){
        res.json(longUrlExists)
    }else {
        const result = await createShortUrl(longurl,shorturl)
        if (result == undefined || result == null) {
            res.send(404).json(result)
        }
        res.json(result)
    }
}
