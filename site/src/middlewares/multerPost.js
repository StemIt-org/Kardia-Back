const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images'));
    },
    filename: (req, file, callback) => {
        callback(null, `post-image${Date.now()}${file.originalname}`);
    }

});
const uploadFiles = multer({ storage });

module.exports = uploadFiles;