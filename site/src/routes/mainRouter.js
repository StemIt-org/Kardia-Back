const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')
const verifyTokenMiddleware = require('../middlewares/verifyToken')
const registerValidations = require('../middlewares/registerMiddleware')

router.post("/login", mainController.loginProcess)
router.post("/getuser",
    verifyTokenMiddleware,
    mainController.getUser
)
router.post("/register",
    registerValidations,
    mainController.store
)

module.exports = router;