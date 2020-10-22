const express = require("express");
const db = require("../users/user-model.js");
const project = require("../projects/project-model.js");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config.js");

// USERS

// logout & destroy session
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          message: "Could not log out at this time. Please try again later.",
        });
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(204).end();
  }
});

// login
router.post("/login", (req, res) => {
  const credentials = req.body;

  db.getBy({ username: credentials.username })
    .then((users) => {
      const user = users[0];
      if (user && bcryptjs.compareSync(credentials.password, user.password)) {
        req.session.username = user.username;
        const token = getJwt(user);
        res.status(200).json({ message: "welcome", data: user, token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// register
router.post("/register", (req, res) => {
  const credentials = req.body;
  const rounds = Number(process.env.HASH_ROUNDS) || 6;
  const hash = bcryptjs.hashSync(credentials.password, rounds);

  credentials.password = hash;

  db.add(credentials)
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// PROJECTS

// get all projects
router.get("/", (req, res) => {
  project
    .getAll()
    .then((projects) => {
      res.status(200).json({ data: projects });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

function getJwt(user) {
  const payload = {
    username: user.username,
    role: user.role,
  };

  const jwtOptions = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, jwtSecret, jwtOptions);
}

module.exports = router;
