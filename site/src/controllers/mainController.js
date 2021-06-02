const db = require('../../../database/models');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')


module.exports = {
    home: async (req, res) => {
        // console.log('MAIN',req.session);
        // res.send('Main Index. Consultar rutas de Readme')
        const nombre = ["lucas", "facundo"]
        res.render('home', {nombre})
    },
    login: (req, res) => {
        res.send('Próxima ruta de login')
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
                req.session.userLogged = authData.user;
                res.locals.userLogged = req.session.userLogged
                res.json({
                    user: authData.user
                })
            }
        })
    },
    register: (req, res) => {
        res.send('register page')
    },
    store: async (req, res) => {
        console.log(req.session);
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
                first_name: req.body.first_name,
                avatar: req.body.avatar
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