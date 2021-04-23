const express = require('express')
const db = require('../../../database/models');

module.exports = {
    posts: async (req, res) => {
        try{
            let posts = await db.Post.findAll();
            res.json(posts)
        } catch(err) {
            res.
            status(400)
            json({error: err})
        }
    },
    post: async (req, res) => {
        try{
            let post = await db.Post.findOne({ where: { id: req.params.id }, include:'postType' });
            if (post) {
                res.json(post)
            } else {
                res.send('Esta publicacion no existe')
            }
        } catch(err) {
            res.
            status(400)
            json({error: err})
        }
    },
    // user: async (req, res) => {
    // User individual
    // },
    poststypes: async (req, res) => {
        try{
            let postsTypes = await db.PostType.findAll({include:'posts'});
            res.json(postsTypes)
        } catch(err) {
            res.
            status(400)
            json({error: err})
        }
    }
}