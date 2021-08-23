const { validationResult } = require("express-validator");
const db = require('../../../database/models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { now } = require("sequelize/types/lib/utils");

module.exports = {
    mainPage: (req, res) => {
        res.json({
            msg: "Please specify the route",
            doc: "https://github.com/StemIt-org/Kardia-Back/blob/master/README.md"
        });
    },
    loginProcess: async (req, res) => {
        try {
            const { email, password } = req.body;
            const userToLogin = await db.User.findOne({ where: { email } });
            if (!userToLogin) {
                res.json({
                    msg: "No se encontró ese usuario"
                })
            } else {
                let okPassword = bcryptjs.compareSync(
                    password,
                    userToLogin.password
                );
                if (okPassword) {
                    jwt.sign({ user: userToLogin }, 'secretKey', { expiresIn: '1h' }, (err, token) => {
                        res
                        .json({
                            token,
                            status: 200
                        })
                        .sendStatus(200);
                    })
                } else {
                    res
                    .json({
                        msg: "Credenciales incorrectas",
                        status: 400
                    })
                    .sendStatus(400);
                };
            };
        } catch (er) {
            console.log(er);
            res.json({
                msg: "Hubo un error",
                error: er
            });
        };
    },
    getUser: (req, res) => {
        jwt.verify(req.token, 'secretKey', (error, authData) => {
            if (error) {
                res.sendStatus(403);
            } else {
                res.json({
                    user: authData.user
                });
            };
        });
    },
    store: async (req, res) => {
        try {
            jwt.verify(req.token, 'secretKey', async (error, authData) => {
                if (error) {
                    res.sendStatus(403);
                } else {
                    let resultValidation = validationResult(req);
                    if (resultValidation.errors.length > 0) {
                        res.json({
                            errors: resultValidation.mapped(),
                        });
                    } else {
                        const existInDb = await db.User.findOne({
                            where: {
                                email: req.body.email,
                            },
                        });
                        if (!existInDb) {
                            const newUser = {
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                email: req.body.email,
                                password: bcryptjs.hashSync(req.body.password, 10),
                            };
                            await db.User.create(newUser)
                            res.json({
                                newUser
                            });
                        } else {
                            res.json({
                                msg: "This email is already register"
                            });
                        };
                    };
                };
            });
        } catch (err) {
            res.json({
                msg: "There was an error",
                err
            });
        };

    },
    suscribe: async (req, res) => {
        try {
            const { name, email } = req.query;
            await db.NewsletterMail.create({
                name: name,
                email: email,
                createdAt: Date.now()
            })
            res.json({
                msg: "Success"
            });
        } catch (err) {
            res.json({
                msg: "There was an error",
                err
            });
        };
        
    },
    getEmails: async (req, res) => {
        try {
            const emails = await db.NewsletterMail.findAll();
            res.json(emails);
        } catch (err) {
            res.json({
                msg: "There was an error",
                err
            });
        };
    },
    deleteSubscripcion: async (req, res) => {
        try {
            if (req.email) {
                await db.NewsletterMail.deleteSubscripcion({
                    where: {
                        email: req.body.email
                    }
                });
            };
        } catch (err) {
            res.json({
                msg: "There was an error",
                err
            });
        };
    },
};
