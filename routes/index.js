const express = require("express");
const userRouter = require("./users")
const discountRouter = require("./discount")
const smartphoneRouter = require("./smartphone")
const router = express.Router()

const UserController = require("../controller/UserController");
const auntetication = require("../middleware/authentication");

router.get('/', (req, res) => {
    res.send('Hello Brooo!')
})

router.post("/login", UserController.loginUser)


router.use("/users", userRouter)
router.use("/discounts", discountRouter)
router.use("/smartphones", smartphoneRouter)

module.exports = router