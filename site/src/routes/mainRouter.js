const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController');
const verifyTokenMiddleware = require('../middlewares/verifyToken');
const registerValidations = require('../middlewares/registerMiddleware');

router.get("/", mainController.mainPage)
router.get("/getemails", mainController.getEmails)

router.post("/login", mainController.loginProcess)

router.post("/getuser",
    verifyTokenMiddleware,
    mainController.getUser
)

router.post("/register",
    verifyTokenMiddleware,
    registerValidations,
    mainController.store
)

router.post("/suscribe", mainController.suscribe)

module.exports = router;