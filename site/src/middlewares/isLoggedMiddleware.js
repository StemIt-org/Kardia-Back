function isLoggedMiddleware(req, res, next) {
    console.log('entranding al middleware');
    if (req.session.userLogged) {
        console.log('SI');
        console.log(req.session.userLogged);
        next()
    } else {
        console.log('NO');
        res.redirect('/')
    }
}
module.exports = isLoggedMiddleware;