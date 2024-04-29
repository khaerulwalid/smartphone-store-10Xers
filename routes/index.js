const express = require("express");
const userRouter = require("./users")
const discountRouter = require("./discount")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Brooo!')
})

router.use("/users", userRouter)
router.use("/discounts", discountRouter)

module.exports = router