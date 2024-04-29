const express = require("express")
const DiscountController = require("../controller/DiscountController")
const router = express.Router()

router.post("/", DiscountController.PostDiscount)

module.exports = router