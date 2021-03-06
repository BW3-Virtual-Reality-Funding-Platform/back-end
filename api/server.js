const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const connection = require("../database/connection.js");
const ProjectRouter = require("./projects/Project-router");
const UserRouter = require("./users/User-router.js");
const StriperRouter = require("./payments/stripe/stripe.js");
const AuthRouter = require("./auth/auth-router.js");
const protected = require("./auth/restricted-mw.js");

const server = express();

const sessionConfiguration = {
  name: "Kickstarter Cookie",
  secret: process.env.SESSION_SECRET || "Our secret!",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 10, // expires after 10 mins
    secure: process.env.SECURE_COOKIES || false,
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: connection,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfiguration));

server.use("/api/projects", ProjectRouter);
server.use("/api/users", protected, UserRouter);
server.use("/api/auth", AuthRouter);
server.use("/api/payments", StriperRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
