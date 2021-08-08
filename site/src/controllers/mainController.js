const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../../../database/models');
const { validationResult } = require("express-validator");

module.exports = {
    mainPage: (req, res) => {
        res.json({
            msg: "Please specify the route",
            doc: "https://github.com/StemIt-org/Kardia-Back/blob/master/README.md"
        })
    },
    loginProcess: async (req, res) => {
        const { email, password } = req.body;
        const userToLogin = await db.User.findOne({ where: { email } });
        if(!userToLogin){
            res.json({
                msg: "No se encontró ese usuario"
            })
        } else {
            let okPassword = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
                );
                if(okPassword){
                    jwt.sign({ user: userToLogin }, 'secretKey',{expiresIn: '1h'}, (err, token) => {
                        res
                        .json({
                            token,
                            status: 200
                            //users
                        })
                        .sendStatus(200)
                    })
                } else {
                    res
                    .json({
                        msg: "Credenciales incorrectas",
                        status: 400
                    })
                    .sendStatus(400)
                }
            }
    },
    getUser: (req, res) => {
        jwt.verify(req.token, 'secretKey', (error, authData) => {
            if (error) {
                res.sendStatus(403)
            } else {
                res.json({
                    user: authData.user
                })
            }
        })
    },
    store: async (req, res) => {
        jwt.verify(req.token, 'secretKey', async (error, authData) => {
            if (error) {
                res.sendStatus(403)
            } else {
                let resultValidation = validationResult(req);
                if (resultValidation.errors.length > 0) {
                    res.json({
                        errors: resultValidation.mapped(),
                    })
                } else {
                    const existInDb = await db.User.findOne({
                        where: {
                            email: req.body.email,
                        },
                    })
                    if (!existInDb) {
                        const newUser = {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: bcryptjs.hashSync(req.body.password, 10),
                        }
                        await db.User.create(newUser)
                        res.json({
                            newUser
                        })
                    } else {
                        res.json({
                            msg: "This email is already register"
                        })
                    }
                }
            }
        })
    },
    suscribe: async (req, res) => {
        try {
            await db.NewsletterMail.create(req.body)
            res.json({
                msg:"Success"
            })
        } catch (error) {
            res.json({
                msg: "There was an error"
            })
        }
        
    },
    getEmails: async (req, res) => {
        try {
            const emails = await db.NewsletterMail.findAll();
            res.json(emails)
        } catch (error) {
            
        }
    },
    deleteSubscripcion: async (req, res) => {
        try {
            res.json({msg:"ok"})
        } catch (error) {
            res.json({
                msg: "There was an error"
            });
        };
    },
}