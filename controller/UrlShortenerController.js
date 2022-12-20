const { generateShortUrlId } =  require("../Utils/Hashing")
const {createShortUrl, getUrl, checkIfLongUrlExists}  = require("../Dao/UrlDao")
const {express} = require("express")
const {ShUrlbloomFilter,LUrlBloomFilter} = require("../script")

module.exports.createRandomShortUrl = async (req,res) => {
    try {
        console.log(req.body);
        const {longurl} = req.body
        if (longurl == undefined || longurl == null){
            res.json({status:404,error:"Invalid request parameters"})
            return
        }
        const shorturl = generateShortUrlId(longurl)
        const result = await createShortUrl(longurl,shorturl)
        if (result == undefined || result == null) {
            res.json({status:404,error:"No data found"})
            return
        }
        res.json({status:201,shorturl})
    } catch (error) {
        res.json({status:404,error})
    }
}

module.exports.getLongUrl = async (req,res) => {
    try {
        const {shorturl} = req.query
        if (shorturl == undefined || shorturl == null){
            res.json({status:404,error:"Invalid query parameter"})
            return
        }
        const urlexists = ShUrlbloomFilter.check(shorturl)
        if(urlexists) {
        const result = await getUrl(shorturl)
            if (result == undefined || result == null || result.length <=0) {
                res.json({status:404,error:"No data found"})
                return
            }
            res.json({status:201,data:result})
        }else {
            res.json({status:404,error:"No data found"})
        }
    } catch (error) {
        res.json({status:404,error})
    }
}

module.exports.createCustomShortUrl = async (req,res) => {
    try {
        console.log(req.body);
        const {longurl, shorturl} = req.body
        if (longurl == undefined || longurl == null || shorturl==undefined||shorturl==null){
            res.json({status:404,error:"Invalid request parameters"})
            return
        }
        const urlExists = LUrlBloomFilter.check(longurl)
        if (urlExists){
            const longUrlExists = await checkIfLongUrlExists(longurl)
            if (longUrlExists != null && longUrlExists.length != 0 ){
                res.json({status:201,data:longUrlExists})
                return
            }
        }
            const result = await createShortUrl(longurl,shorturl)
            if (result == undefined || result == null) {
                res.json({status:404,error:"No data found"})
                return
            }
            res.json({status:201,shorturl})
        
    } catch (error) {
        res.json({status:404,error})
    }
}
