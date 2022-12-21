const { setUpBloomFilter } = require("./bloom-filter/BloomFilter");
const {getConnectionAndQuery} = require("./config/db")

const ShUrlbloomFilter = setUpBloomFilter(100)
const LUrlBloomFilter = setUpBloomFilter(100)

async function runScriptForBloomFilter(){
    const query = "select longurl,shorturl from url"
    const result = await getConnectionAndQuery(query)
   
    for(let i=0;i<result.length;i++) {
        LUrlBloomFilter.add(result[i].longurl)
    }

    for(let i=0;i<result.length;i++) {
        ShUrlbloomFilter.add(result[i].shorturl)
    }

}

module.exports = {runScriptForBloomFilter,ShUrlbloomFilter,LUrlBloomFilter}