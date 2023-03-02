const express = require("express");
const session = require("express-session");
var passport = require("passport");
var routes = require("./routes");

const MongoStore = require("connect-mongo");

require("dotenv").config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
  mongoUrl: "mongodb://127.0.0.1:27017/express1",
  collection: "sessions",
});

app.use(
  session({
    secret: "secret",
    name: "Jugya",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(3000, () => console.log("success"));
