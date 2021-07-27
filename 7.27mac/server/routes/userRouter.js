const router = require("express").Router()
const userCtrl = require("../controllers/userCtrl")
const auth = require("../middleware/auth")


router.get('/user/:id',auth,userCtrl.getUser)