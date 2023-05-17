//MongoDB Shell Commands 
//show collections 
//db.contacts.insert
//db.contacts.findone 
//db.contacts.update 
//db.contacts.delete 
//db.contacts.deleteMany({})
//Mongodb: npm i mongodb -s
//Mongoose:  npm i mongoose -S
////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
// . Mongoose is an object-document mapper (ODM) that allows you to run 
// MongoDB commands in a way that preserves the object-oriented structure of your 
// application.
//Mo

//listing 14.1:Configuring Mongoose with Node.js App
const port = 3000;
const mongoose = require("mongoose"),
express = require("express"),
app = express(),
Subscriber = require("./models/subscriber"),//require subscriber model from our models folder.
subscribersController = require("./controllers/subscribersController");

app.set("view engine", "ejs"); //view engine
app.set("port", process.env.PORT || 3000);

//Set up connection to database
mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

//Listing 14.2: Log a message when the database is connected 
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

//listing 14.4: Statements to create and save models
// var subscriber1 = new Subscriber({
//   name: "Jon Wexler",
//   email: "jon@jonwexler.com"
// });

// subscriber1.save()
//   .then((result) => {
//     console.log(result)
//  })
//  .catch((error) =>{ 
//     console.log(error);

//  });
 //Create and save a subscriber in a single step
//  Subscriber.create(
//   {
//   name: "Kundani Don",
//   email: "Don@gmail.com"
//   }, 
//   function (error, savedDocument) {
//   if (error) console.log(error);
//   console.log(savedDocument);
//   }
//  );


//listing 15.2 Using the subscribers controller 
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
console.log(req.data);
res.render("subscribers", {subscribers: req.data})
});

//listing 15.5 Routes for the subscriptions 
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

 






app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});












