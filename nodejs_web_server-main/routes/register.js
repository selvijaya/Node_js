const express = require('express')
const router = express.Router()
const registercontroller = require('../controllers/registerController')
router.post('/',registercontroller.handleNewUser)
module.exports = router;