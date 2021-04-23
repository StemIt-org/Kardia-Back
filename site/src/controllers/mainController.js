const db = require('../../../database/models');

module.exports = {
    home: async (req, res) => {
        res.send('Main Index. Consultar rutas de Readme')
        //res.render('home')
    },
    login: (req, res) => {
        res.send('Proximamente login')
        //res.render('login')
    },
    users: async (req, res) => {
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