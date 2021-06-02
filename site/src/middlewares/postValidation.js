const path = require('path');
const { body } = require('express-validator');
const db = require('../../../database/models');

module.exports = [
    body('title')
        .notEmpty().withMessage('Ingresa un título para la publicación').bail(),
    body('body')
        .notEmpty().withMessage('Ingresa el cuerpo de la nota').bail(),
    body('postTypeId')
        .notEmpty().withMessage('Selecciona una categoría para la publicación').bail()
        .custom(async (value) => {
            let existInDb = await db.PostType.findOne({ where: { id:parseInt(value) } })
            if (existInDb) {
                return true
            } else {
                throw new Error('El tipo de publicación elegido no existe')
            }
        })
        .withMessage('El tipo de publicación elegido no existe').bail(),
    body("images").custom((value, { req }) => {
        if (req.originalMethod == 'POST') {
            console.log('Estoy en post');
            let files = req.files;
            if (!files) {
            throw new Error("Tienes que subir al menos una imagen ");
            }
            else {
                const acceptedExtensions = [".jpg", ".png", ".gif"];
                let errores = [];
                let extensiones = files.map((elemento) => {
                    return path.extname(elemento.originalname)
                });
                extensiones.forEach((elemento) => {
                    acceptedExtensions.includes(elemento) ?
                        '' : errores.push(new Error(`La extensión ${elemento} no es aceptada`));
                })
                if (errores.length > 0) {
                    throw new Error(`Las extensiones aceptadas son ${acceptedExtensions}`);
                } else {
                    return true
                }
            }
        } else if (req.originalMethod == 'PUT') {
            let files = req.files;
            if (files && files.length > 0) {
                const acceptedExtensions = [".jpg", ".png", ".gif"];
                let errores = [];
                let extensiones = req.files.map((elemento) => {
                    return path.extname(elemento.originalname)
                });
                if (extensiones.length > 0) {
                    extensiones.forEach((elemento) => {
                        acceptedExtensions.includes(elemento) ?
                            '' : errores.push(new Error(`La extensión ${elemento} no es aceptada`));
                    })
                }
                if (errores.length > 0) {
                    throw new Error(`Las extensiones aceptadas son ${acceptedExtensions}`);
                } else {
                    return true
                }
            } else {
                return true
            }
        }
      }),
    
]