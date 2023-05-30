"use strict";

const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const errorController = require("./controllers/errorController");
const router = require("./routes/index");
const methodOverride = require("method-override");
const expressValidator = require("express-validator");
const expressSession = require("express-session"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash");
  const passport = require("passport");  
  
  /////
 
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/confetti_cuisine",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
router.use(expressValidator())

app.use(layouts);
app.use(express.static("public"));

router.use(cookieParser("secret_passcode"));
router.use(expressSession({
  secret: "secret_passcode",
  cookie: {
    maxAge: 4000000
  },
  resave: false,
  saveUninitialized: false
}));
router.use(connectFlash());

// Requiring and initialising passport
// Passport MUST be 0.4.0 in order to work
router.use(passport.initialize())
router.use(passport.session());
// Set-up login strategy on the user model and tell passport to handle the hasing of user data in sessions for you.
// passport-local-mongoose makes this process simple and pretty much automatic.
// You need to make sure that your user model is made available before you contine to connect it to passport
const User = require("./models/user");
passport.use(User.createStrategy());
// These 2 lines tells passport to serialise and your users through the User model.
// Serialisisation converts the data from a data structure to a more readable format often to a string, that can be transfered over HTTP
// Passport.js does the serialisation process and encrypts user's data so it can be stored as part of a session cookie on your browser.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// This must come after the passport initalisation.
router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  // Add the loggedIn and currentUser variables to the response object
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  //
  next();
});

router.get("/", (req, res) => {
  res.render("index");
});

router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));




router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);
app.use("/", router)

app.listen(app.get("port"), () => {
  console.log(`Server running at http://127.0.0.1:${app.get("port")}`);
});
