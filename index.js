const app = require("express")()
const dotenv = require("dotenv")
const { router } = require("./router/urlShortenerRoter")
const bodyParser = require("body-parser")
const {runScriptForBloomFilter} = require("./script")

dotenv.config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", router)

app.listen(8081, () => {
    console.log("Server started listening to port 8081")
    runScriptForBloomFilter()
})


