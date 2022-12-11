const {getConnectionAndQuery} = require("../config/db")

module.exports.createShortUrl = async (longUrl,shortUrl) =>  {
    try {
        const sqlStatement = `INSERT into url (longurl,shorturl) values('${longUrl}','${shortUrl}')`
        const result = await getConnectionAndQuery(sqlStatement)
        console.log(result);
        return result;
    } catch (error) {
        throw error
    }
    
}

module.exports.getUrl = async (shortUrl) => {
    // try {
        const sqlStatement = `Select longurl from url where shorturl = '${shortUrl}'`
        const result = await getConnectionAndQuery(sqlStatement)
        console.log(result);
        return result;
    // } catch (error) {
    //     throw error
    // }
}

module.exports.checkIfLongUrlExists = async (longUrl) => {
    const sqlStatement = `Select shorturl from url where longurl = '${longUrl}'`
    const result = await getConnectionAndQuery(sqlStatement)
    console.log(result);
    return result;
}