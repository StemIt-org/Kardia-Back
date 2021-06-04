const express = require("express");
const router = express.Router();
const uploadFiles = require('../middlewares/multerPost');
const postsController = require('../controllers/postsController');
const validacionePost = require('../middlewares/postValidation')
// const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware')

// router.get("/types", postsController.poststypes);
// router.get("/images", postsController.images);
// router.get("/create", postsController.create);

// Posts CRUD

router.get("/", postsController.posts);

router.delete("/:id", postsController.delete);

router.put("/:id",
    uploadFiles.array('images'),
    validacionePost,
    postsController.update);
router.post(
    "/create",
    uploadFiles.array('images'),
    validacionePost,
    postsController.store
);

router.get("/:id", postsController.post);

module.exports = router;
