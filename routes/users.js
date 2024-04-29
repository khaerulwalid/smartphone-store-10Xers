const express = require("express")
const UserController = require("../controller/UserController")
const router = express.Router()

router.post("/", UserController.registerUser)

module.exports = router