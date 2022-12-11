const { generateShortUrlId } =  require("../Utils/Hashing")
const {createShortUrl, getUrl, checkIfLongUrlExists}  = require("../Dao/UrlDao")
const {express} = require("express")

module.exports.createRandomShortUrl = async (req,res) => {
    try {
        console.log(req.body);
        const {longUrl} = req.body
        if (longUrl == undefined || longUrl == null){
            res.json({status:404,error:"Invalid request parameters"})
            return
        }
        const shortUrl = generateShortUrlId(longUrl)
        const result = await createShortUrl(longUrl,shortUrl)
        if (result == undefined || result == null || result.length <=0) {
            res.json({status:404,error:"No data found"})
            return
        }
        res.json({status:201,data:result})
    } catch (error) {
        res.json({status:404,error})
    }
}

module.exports.getLongUrl = async (req,res) => {
    try {
        const {shortUrl} = req.query
        if (shortUrl == undefined || shortUrl == null){
            res.json({status:404,error:"Invalid query parameter"})
            return
        }
        const result = await getUrl(shortUrl)
        if (result == undefined || result == null || result.length <=0) {
            res.json({status:404,error:"No data found"})
            return
        }
        res.json({status:201,data:result})
    } catch (error) {
        res.json({status:404,error})
    }
}

module.exports.createCustomShortUrl = async (req,res) => {
    try {
        console.log(req.body);
        const {longurl, shorturl} = req.body
        if (longUrl == undefined || longUrl == null || shorturl==undefined||shorturl==null){
            res.json({status:404,error:"Invalid request parameters"})
            return
        }
        const longUrlExists = await checkIfLongUrlExists(longurl)
        if (longUrlExists != null && longUrlExists.length != 0 ){
            res.json({status:201,data:longUrlExists})
            return
        }else {
            const result = await createShortUrl(longurl,shorturl)
            if (result == undefined || result == null || result.length <=0) {
                res.json({status:404,error:"No data found"})
                return
            }
            res.json({status:201,data:result})
        }
    } catch (error) {
        res.json({status:404,error})
    }
}
