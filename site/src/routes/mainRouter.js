const express = require("express");
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get("/", mainController.home)
router.get("/users", mainController.users)
router.get("/login", mainController.login)
module.exports = router;