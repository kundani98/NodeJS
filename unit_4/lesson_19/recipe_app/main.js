
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
  router = express.Router(),
  Subscriber = require("./models/subscriber"),
  subscribersController = require("./controllers/subscribersController"),
  usersController = require("./controllers/usersController"),

  app = express();

mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  { useNewUrlParser: true }
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
app.use("/", router);
//listing 19.3    
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);



app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});






























