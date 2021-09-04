module.exports = async function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    if (typeof bearerHeader) {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};
