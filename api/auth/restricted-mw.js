const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "cant touch this" });
      } else {
        req.jwt = decodedToken;

        next();
      }
    });
  } else if (req.session.username) {
    next();
  } else {
    res.status(401).json({ you: "can not pass! " });
  }
};
