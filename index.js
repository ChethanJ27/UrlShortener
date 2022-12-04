const app = require("express")()
const dotenv = require("dotenv")
const { router } = require("./router/urlShortenerRoter")

dotenv.config()

app.use("/", router)

app.listen(8081, () => console.log("Server started listening to port 8081"))
