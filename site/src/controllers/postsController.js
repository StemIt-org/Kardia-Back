const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const db = require('../../../database/models');

class Imagen {
  constructor(name, postId) {
    this.name = name;
    this.postId = postId;
  }
}

module.exports = {
  posts: async (req, res) => {
    try {
      const posts = await db.Post.findAll({
        include: ['postType', 'postImages'],
        limit: 10,
      });
      res.json(posts);
    } catch (err) {
      res
        .status(400)
        .json({ error: err });
    }
  },
  post: async (req, res) => {
    try {
      const post = await db.Post.findOne({
        where: { id: req.params.id },
        include: ['postType', 'postImages'],
      });
      if (post) {
        res.json(post);
      } else {
        res.send('Esta publicacion no existe');
      }
    } catch (err) {
      res
        .status(400)
        .json({ error: err });
    }
  },
  store: (req, res) => {
    jwt.verify(req.token, 'secretKey', async (error) => {
      if (error) {
        res.sendStatus(401);
      } else {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
          res.json({
            errors: resultValidation.mapped(),
          });
        } else {
          const {
            title, //
            body, //
            extra,
            postTypeId, //
          } = req.body;
          db.Post.create({
            title,
            body,
            extra,
            postTypeId,
          }).then((Post) => {
            const postId = Post.dataValues.id;

            if (req.files) {
              const files = req.files.map((element) => new Imagen(element.filename, postId));
              files.forEach((file) => {
                db.Image.create(file);
              });
            }
            db.Post.findOne({
              where: { id: postId },
              include: ['postType', 'postImages'],
            }).then((newPost) => {
              db.Post.findOne({
                where: { id: Number(newPost.dataValues.id) },
                include: ['postType'],
              })
                .then((finalRes) => {
                  res.json({
                    msg: 'The post was succefully created',
                    postId: finalRes.id,
                  });
                });
            });
          });
        }
      }
    });
  },
  delete: (req, res) => {
    jwt.verify(req.token, 'secretKey', async (error) => {
      if (error) {
        res.sendStatus(401);
      } else {
        db.Post.destroy({
          where: {
            id: req.params.id,
          },
        }).then(() => {
          res.json({
            msg: 'El archivo fue eliminado',
          });
        })
          .catch((err) => {
            res.json({
              error: err,
            });
          });
      }
    });
  },
  update: async (req, res) => {
    jwt.verify(req.token, 'secretKey', async (error) => {
      if (error) {
        res.sendStatus(401);
      } else {
        try {
          const resultValidation = validationResult(req);
          if (resultValidation.errors.length > 0) {
            res.json({
              errors: resultValidation.mapped(),
            });
          } else {
            const postId = Number(req.params.id);
            const {
              title,
              body,
              extra,
              postTypeId,
            } = req.body;
            if (req.files) {
              const files = req.files.map((element) => new Imagen(element.filename, postId));
              files.forEach((file) => {
                db.Image.create(file);
              });
            }
            await db.Post.update({
              title,
              body,
              extra,
              postTypeId,
            }, {
              where: { id: postId },
            });
            const nuevoPost = await db.Post.findByPk(postId, { include: ['postType', 'postImages'] });
            res.send(nuevoPost);
          }
        } catch (err) {
          res.json({
            err,
          });
        }
      }
    });
  },
};
