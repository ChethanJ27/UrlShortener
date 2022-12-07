const { Router } = require("express")
const { createRandomShortUrl, getLongUrl, createCustomShortUrl } = require("../controller/UrlShortenerController")
const router = Router()

router.get("/", async (req, res) => {
  console.log("recieved request")
  getLongUrl(req, res)
})

router.post("/", async (req, res) => {
  console.log(req.body);
  createRandomShortUrl(req,res)
})

router.post("/customurl/", async (req, res) => {
  createCustomShortUrl(req,res)
})

module.exports = { router }
