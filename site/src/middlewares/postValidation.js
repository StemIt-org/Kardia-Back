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
      const existInDb = await db.PostType.findOne({ where: { id: Number(value) } });
      if (existInDb) {
        return true;
      }
      throw new Error('El tipo de publicación elegido no existe');
    })
    .withMessage('El tipo de publicación elegido no existe')
    .bail(),

];
