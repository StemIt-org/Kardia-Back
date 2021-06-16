const db = require('../../../database/models');
const { validationResult } = require("express-validator");

class imagen{
    constructor(name, postId) {
        this.name = name,
        this.postId = postId
    }
}

module.exports = {
    posts: async (req, res) => {
        try {
            let posts = await db.Post.findAll({ include: ['postType','postImages'] });
            res.json(posts)
        } catch (err) {
            res
            .status(400)
            .json({ error: err })
        }
    },
    post: async (req, res) => {
        try {
            let post = await db.Post.findOne({
                where: { id: req.params.id },
                include: ['postType','postImages']
            });
            if (post) {
                res.json(post)
            } else {
                res.send('Esta publicacion no existe')
            }
        } catch (err) {
            res.
                status(400)
            json({ error: err })
        }
    },
    store: (req, res) => {
        console.log("STORE :", req.body);
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.json({
                errors: resultValidation.mapped(),
            })
        } else {
            const {
                title,//
                body,//
                extra,
                postTypeId,//
            } = req.body
            db.Post.create({
                title,
                body,
                extra,
                postTypeId,
            }).then((Post) => {
                let postId = Post.dataValues.id;
                
                if (req.files){                
                    const files = req.files.map(element => {
                        return new imagen(element.filename, postId)
                    })
                    files.forEach(archivo => {
                        db.Image.create(archivo)
                    })
                }
                db.Post.findOne({
                    where: { id: postId },
                    include: ['postType','postImages']
                }).then(newPost => {
                    db.Post.findOne({
                        where: { id: parseInt(newPost.dataValues.id) },
                        include: ['postType']
                    })
                    .then((finalRes) => {
                        res.json({
                            msg: "The post was succefully created",
                            postId: finalRes.id
                        })
                    })
                })
                //res.redirect(`/posts/${postId}`)
            })
        }
    },
    delete: (req, res) => {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.json({
                msg: 'El archivo fue eliminado'
            })
        })
        .catch((err) => {
            res.json({
                error:err
            })
        })
    },
    update: async (req, res) => {
        console.log(req.originalMethod);
        try {
            let resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                res.json({
                    errors: resultValidation.mapped(),
                })
            } else {
                //Guardarlo
                const postId = parseInt(req.params.id)
                console.log(postId);
                const {
                    title,
                    body,
                    extra,
                    postTypeId
                } = req.body
                if (req.files) {
                    const files = req.files.map(element => {
                        return new imagen(element.filename, postId)
                    })
                    files.forEach(archivo => {
                        db.Image.create(archivo)
                    })
                }
                await db.Post.update({
                    title,
                    body,
                    extra,
                    postTypeId
                }, {
                    where: { id: postId }
                })
                let nuevoPost = await db.Post.findByPk(postId,{include:['postType', 'postImages']})
                res.send(nuevoPost)
            }
        } catch (error) {
            console.log(error);
        }
    },   
    // edit: async (req, res) => {
    //     try {
    //         let postToEdit = await db.Post.finByPk({
    //             include:['postType', 'postImages'],
    //             where:{id: req.params.id}
    //         })
    //         res.json({postToEdit}) //Proximamente renderizamos el formulario para editar
    //     } catch (err) {
    //         res.json({
    //             error: error
    //         })
    //     }
    // },
    // create: (req, res) => {
    //     // res.send('Proximamente formulario')
    //     res.render('index')
    // },
    // poststypes: async (req, res) => {   // Hecho para testear
    //     try {
    //         let postsTypes = await db.PostType.findAll({ include: 'posts' });
    //         res.json(postsTypes)
    //     } catch (err) {
    //         res.
    //         status(400)
    //         json({ error: err })
    //     }
    // },
    // images: async (req, res) => {   // Hecho para testear
    //     let images = await db.Image.findAll({include:'post'})
    //     res.json(images) 
    // }
}