const express = require("express");
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get("/", mainController.home)
router.get("/posts", mainController.posts)
router.get("/posts/:id", mainController.post)
router.get("/users", mainController.users)
router.get("/poststypes", mainController.poststypes)

module.exports = router;