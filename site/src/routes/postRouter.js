const express = require("express");
const router = express.Router();
const uploadFiles = require('../middlewares/multerPost');
const validacionePost = require('../middlewares/postValidation')
const postsController = require('../controllers/postsController');
const verifyTokenMiddleware = require('../middlewares/verifyToken');

// Posts CRUD

router.get("/", postsController.posts);

router.delete("/:id",
    verifyTokenMiddleware,
    postsController.delete
);

router.put("/:id",
    verifyTokenMiddleware,
    uploadFiles.array('images'),
    validacionePost,
    postsController.update
);

router.post(
    "/create",
    verifyTokenMiddleware,
    uploadFiles.array('images'),
    validacionePost,
    postsController.store
);

router.get("/:id", postsController.post);

module.exports = router;
