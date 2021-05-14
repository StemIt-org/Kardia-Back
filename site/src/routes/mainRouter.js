const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')
const verifyTokenMiddleware = require('../middlewares/verifyToken')


router.get("/", mainController.home)
router.get("/users", mainController.users)


router.get("/login", mainController.login)

router.post("/login", mainController.loginProcess)
router.post("/getuser", verifyTokenMiddleware, mainController.getUser)




module.exports = router;