const db = require('../../../database/models');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')


module.exports = {
    home: async (req, res) => {
        res.send('Main Index. Consultar rutas de Readme')
        //res.render('home')
    },
    login: (req, res) => {
        res.send('Próxima ruta de login')
    },
    loginProcess: async (req, res) => {
        const { email, password } = req.body;
        const user = await db.User.findOne({ where: { email } });
        if(!user){
            res.json({
                msg: "No se encontró ese usuario"
            })
        } else {
            if(password === user.dataValues.password){
                jwt.sign({ user }, 'secretKey',{expiresIn: '1h'}, (err, token) => {
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



        // if (user) {
        //     jwt.sign({ user }, 'secretKey', (err, token) => {
        //         res
        //         .json({
        //             token,
        //             status: 200
        //             //users
        //         })
        //         .sendStatus(200)
        //     })
        // } else {
        //     res
        //     .json({
        //         msg: "No se encontró un usuario con ese id",
        //         status: 400
        //     })
        //     .sendStatus(400)
        // }
    },
    getUser: (req, res) => {
        jwt.verify(req.token, 'secretKey', (error, authData) => {
            if (error) {
                res.sendStatus(403)
            } else {
                res.json({
                    msg: "USER VALIDADO",
                    authData: authData
                })
            }
        })
    },











    users: async (req, res) => {    // Hecho para testear
        try{
            let users = await db.User.findAll();
            res.json(users)
        } catch(err) {
            res.
            status(400)
            json({error: err})
        }
    },
}