const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

// const connection = require('../database/dbConfig')
const ProjectRouter = require("./projects/Project-router.js");
const UserRouter = require("./users/User-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(session(sessionConfiguration));

server.use("/api/projects", ProjectRouter);
server.use("/api/users", UserRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
