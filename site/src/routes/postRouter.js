const express = require("express");
const router = express.Router();
const uploadFiles = require('../middlewares/multerPost');
const postsController = require('../controllers/postsController');
const validacionePost = require('../middlewares/postValidation')

router.get("/types", postsController.poststypes);

// Posts CRUD

router.get("/", postsController.posts);
router.get("/images", postsController.images);   // Hecho para testear
router.get("/create", postsController.create);
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
