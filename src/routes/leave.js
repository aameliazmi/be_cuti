const express = require('express')
const userController = require('../controller/leave.js')
const router = express.Router()

router.get("/", userController.getAllLeave)
router.patch("/:id", userController.updateLeave)
router.post("/", userController.createNewLeave)
router.delete("/:id", userController.deleteLeave)

module.exports = router;