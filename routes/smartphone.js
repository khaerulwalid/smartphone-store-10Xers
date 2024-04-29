const express = require("express")
const SmartphoneController = require("../controller/SmartphoneController")
const router = express.Router()
const auntetication = require("../middleware/authentication");


router.get("/", SmartphoneController.getSmartphone)
router.post("/", auntetication, SmartphoneController.postSmartphone)
router.put("/:id", auntetication, SmartphoneController.putSmartphone)
router.delete("/:id", auntetication, SmartphoneController.deleteSmartphone)

module.exports = router