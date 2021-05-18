function isLoggedMiddleware(req, res, next) {
    console.log('entranding al middleware');
    if (req.session.userLogged) {
        console.log('si rey');
        console.log(req.session.userLogged);
        next()
    } else {
        console.log('No papi');
        res.redirect('/')
    }
}
module.exports = isLoggedMiddleware;