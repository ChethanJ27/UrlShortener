const {pool} = require("../config/db")

module.exports.createShortUrl = async (longUrl,shortUrl) => {
    const sqlStatement = `INSERT into url (longurl,shorturl) values('${longUrl}','${shortUrl}')`
    const result = await pool.query(sqlStatement)
    console.log(result);
    return result;
}

module.exports.getUrl = async (shortUrl) => {
    const sqlStatement = `Select longurl from url where shorturl = '${shortUrl}'`
    const result = await pool.query(sqlStatement)
    console.log(result);
    return result;
}

module.exports.checkIfLongUrlExists = async (longUrl) => {
    const sqlStatement = `Select shorturl from url where longurl = '${longUrl}'`
    const result = await pool.query(sqlStatement)
    console.log(result);
    return result;
}