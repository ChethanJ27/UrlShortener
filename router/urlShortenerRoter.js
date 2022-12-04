const { Router } = require("express")
const { getFullUrl } = require("../controller/UrlShortenerController")
const router = Router()

router.get("/", async (req, res) => {
  console.log("recieved request")
  getFullUrl(req, res)
  //   console.log("rows", rows)
  //   res.json(rows)
})

router.post("/", async (req, res) => {
  console.log("recieved request")
  res.sendStatus(200)
})

router.post("/custom-url", async (req, res) => {
  console.log("recieved request")
  res.sendStatus(200)
})

module.exports = { router }
