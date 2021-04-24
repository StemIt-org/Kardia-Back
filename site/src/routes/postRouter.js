const express = require("express");
const router = express.Router();

const postsController = require('../controllers/postsController')



router.get("/types", postsController.poststypes)

// Posts CRUD

router.get("/", postsController.posts)
router.get("/images", postsController.images)   // Hecho para testear
router.get("/create", postsController.create)
router.post("/create", postsController.store)
router.get("/:id", postsController.post)

module.exports = router;
