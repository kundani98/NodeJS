
//Mongoose acts as a layer over the database to map documents to JavaScript objects

//CRUD actions 
//Create 
//Read 
//Update 
//Delete

//CRUD HTTP methods 
//PUT 
//DELETE

//required and objects
const port = 3000;
const mongoose = require("mongoose"),
express = require("express"),
 Subscriber = require("./models/subscriber"),
 subscribersController = require("./controllers/subscribersController"),
 usersController = require("./controllers/usersController"),
 app = express();

 const expressSession = require("express-session"),
 cookieParser = require("cookie-parser"),
 connectFlash = require("connect-flash");
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



 mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  {useNewUrlParser: true}
 );
 
 const db = mongoose.connection;
 
 
 //Log a message when the database is connected 
 db.once("open", () => {
   console.log("Successfully connected to MongoDB using Mongoose!");
  });
 
  app.set("port", process.env.PORT || 3000);
  app.set('view engine', 'ejs');



app.get("/users", usersController.index);
  app.get("/users", usersController.index);
  app.post("/subscribe", subscribersController.saveSubscriber);


  app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

  




























