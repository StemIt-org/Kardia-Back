const express = require("express");
const router = express.Router();

const postsController = require('../controllers/postsController')



router.get("/types", postsController.poststypes)

// Posts CRUD

router.get("/", postsController.posts)
router.get("/:id", postsController.post)
//router.get("/create", postsController.post)
//router.post("/:id", postsController.post)


module.exports = router;
