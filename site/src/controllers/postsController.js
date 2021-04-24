const express = require('express')
const db = require('../../../database/models');

module.exports = {
    posts: async (req, res) => {
        try {
            let posts = await db.Post.findAll({ include: 'postType', include: 'postImages' });
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
                include: 'postType',
                include: 'postImages'
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
    create: (req, res) => {
        res.send('Proximamente formulario')
    },
    store: (req, res) => {
        const {
            title,
            body,
            extra,
            images,
            dateEnd,
            postTypeId,
        } = req.body
        db.Post.create({
            title,
            body,
            extra,
            images,
            dateEnd,
            postTypeId,
        }).then((newPost) => {
            res.send(newPost)
        })
    },
    poststypes: async (req, res) => {   // Hecho para testear
        try {
            let postsTypes = await db.PostType.findAll({ include: 'posts' });
            res.json(postsTypes)
        } catch (err) {
            res.
                status(400)
            json({ error: err })
        }
    },
    images: async (req, res) => {   // Hecho para testear
        let images = await db.Image.findAll({include:'post'})
        res.json(images) 
    }
}