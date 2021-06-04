const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')
const verifyTokenMiddleware = require('../middlewares/verifyToken')
// const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware')

// router.get("/", mainController.home)
// router.get("/users", mainController.users)
// router.get("/login", mainController.login)
// router.get("/register", mainController.register)

router.post("/login", mainController.loginProcess)
router.post("/getuser", verifyTokenMiddleware, mainController.getUser)
router.post("/register", mainController.store)




module.exports = router;