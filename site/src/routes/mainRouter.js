const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mainController = require('../controllers/mainController');
const verifyTokenMiddleware = require('../middlewares/verifyToken');
const registerValidations = require('../middlewares/registerMiddleware');

router.get('/', mainController.mainPage);
router.get('/getemails', mainController.getEmails);

router.post('/login', mainController.loginProcess);

router.post('/getuser',
  verifyTokenMiddleware,
  mainController.getUser);

router.post('/register',
  verifyTokenMiddleware,
  registerValidations,
  mainController.store);

router.get('/contact', mainController.contact);

router.get('/suscribe', mainController.suscribe);

router.get('/unsuscribe', mainController.deleteSubscripcion);

module.exports = router;
