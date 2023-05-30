
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
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Subscriber = require("./models/subscriber");
const subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

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
  app.set("view engine", "ejs");
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(layouts);
  app.use(express.static("public"));


// GET: /subscribers Routing
// Call the getAllSubscribers in the subscribersController file
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  // This logs & sends the data that was added in the subscribersController
  console.log(req.data);
  // res.send(req.data);

  // This will load the subscriber.ejs file and pass it the subscribers data
  res.render("subscribers", {subscribers: req.data})
});

app.get("/", homeController.respondWithName);

// New GET route for: users
app.get("/users", usersController.index);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);



  app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

  




























