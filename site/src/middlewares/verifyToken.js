module.exports = async function verifyToken(req, res, next) {
    console.clear();
    // authorization: bearer <token>
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader) {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}