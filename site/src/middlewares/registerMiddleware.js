const { body } = require('express-validator');

module.exports = [
    body('first_name').notEmpty().withMessage('Escribe un nombre').bail(),
    body('last_name').notEmpty().withMessage('Escribe un apellido').bail(),
    body('email').notEmpty().withMessage('Escribe una email').bail(),
    body('password').notEmpty().withMessage('Escribe una contraseña').bail(),
]