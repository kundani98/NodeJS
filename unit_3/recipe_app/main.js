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


// //Add Mongodb connection 
// const MongoDB = require("mongodb").MongoClient,
//   dbURL = "mongodb://127.0.0.1:27017",
//   dbName = "recipe_db";

//   //show collection
// MongoDB.connect(dbURL, (error, client) => {
//   if (error) throw error;
//   let db = client.db(dbName);
//   db.collection("contacts")
//     .find()
//     .toArray((error, data) => {
//       if (error) throw error;
//       console.log(data);
//     });
// });

// //insert new document in collection
// db.collection("contacts")
//  .insert({
//  name: "Freddie Mercury",
//  email: "fred@queen.com"
//  }, (error, db) => {
//  if (error) throw error;
//  console.log(db);
//  });


/////////////////////////////////////////////////
// . Mongoose is an object-document mapper (ODM) that allows you to run 
// MongoDB commands in a way that preserves the object-oriented structure of your 
// application.
//Mo

//required module
const port = 3000;
const mongoose = require("mongoose"),
express = require("express"),
 Subscriber = require("./models/subscriber"),
 subscribersController = require("./controllers/subscribersController"),
 
 //Instantiate express object
 app = express();

 //Access Public folder
app.use(express.static("public"));
 
//connect to database using mongoose
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
 
 //Templating engine
 app.set('view engine', 'ejs');
//To apply a schema to a model



 //Create and save models

 //Instantiate a new subscriber
//  var subscriber1 = new Subscriber({
//   name: "Tom Jerry",
//   email: "Jerry@gmail.com"
//  });
//  //save a subscriber to the database
//  subscriber1.save()
//  .then((result)=>{ 
//   console.log(result);
//  }) 
//  .catch((error)=>{
//   console.log(error);

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

 
// //Query to run in main 
// var myQuery = Subscriber.findOne({
//   name: "Jon Wexler"
//   })
//   .where("email", /wexler/);
//  myQuery.exec((error, data) => {
//   if (data) console.log(data.name);
//  });



//Setting routes
//Subscriber route
//Using subscriber controller in main
app.get("/subscribers", subscribersController.getAllSubscribers, 
 (req, res, next) => {
console.log(req.data);
res.render("subscribers", {subscribers: req.data});
next();
});

// //contact routes 
// app.get("/contact", subscribersController.getSubscriptionPage); 

// //subscribe route
// app.post("/subscribe", subscribersController.saveSubscriber);


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});









///////////////////////////////////////////////////////////////
// "use strict";

// const express = require("express"),
//   app = express(),
//   errorController = require("./controllers/errorController"),
//   homeController = require("./controllers/homeController"),
//   layouts = require("express-ejs-layouts"),
//   mongoose = require("mongoose"),
//   Subscriber = require("./models/subscriber"),
//   subscribersController = require("./controllers/subscribersController");
// mongoose.connect(
//   "mongodb://127.0.0.1:27017/recipe_db",
//   { useNewUrlParser: true }
// );
// //   mongoose.set("useCreateIndex", true);
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("Successfully connected to MongoDB using Mongoose!");
// });

// app.set("port", process.env.PORT || 3000);
// app.set("view engine", "ejs");

// app.use(express.static("public"));
// app.use(layouts);
// app.use(
//   express.urlencoded({
//     extended: false
//   })
// );

// app.use(express.json());
// app.use(homeController.logRequestPaths);

// app.get("/contact", subscribersController.getSubscriptionPage);
// app.post("/subscribe", subscribersController.saveSubscriber);

// app.get("/name", homeController.respondWithName);
// app.get("/items/:vegetable", homeController.sendReqParam);

// app.post("/", (req, res) => {
//   console.log(req.body);
//   console.log(req.query);
//   res.send("POST Successful!");
// });
// app.get("/subscribers", subscribersController.getAllSubscribers,
//   (req, res, next) => {
//     console.log(req.data);
//     res.render("subscribers", { subscribers: req.data })
//   });
// app.use(errorController.logErrors);
// app.use(errorController.respondNoResourceFound);
// app.use(errorController.respondInternalError);

// app.listen(app.get("port"), () => {
//   console.log(`Server running at http://localhost:${app.get("port")}`);
// });


























// MongoDB.connect(dbURL, (error, client) => {
//     if (error) throw error;

//     let db = client.db(dbName);
//     db.collection("contacts")
//         .find()
//         .toArray((error, data) => {
//             if (error) throw error;
//             console.log("Received data: ")
//             console.log(data);
//         })

//     db.collection("contacts")
//         .insert({
//             name: "Freddie Mercury",
//             email: "fred@queen.com"
//         }, (error, db) => {
//             if (error) throw error;
//             console.log(db);
//         });
// })
// dbURL = "mongodb://127.0.0.1:27017",
// dbName = "recipe_db"

// const mongoose = require("mongoose"),
// Subscriber = require("./models/subscriber"),
// subscribersController = require("./controllers/subscribersController")
// mongoose.connect(
//  "mongodb://127.0.0.1:27017/recipe_db",
//  {useNewUrlParser: true}
// );
// const db = mongoose.connection;

// db.once("open", () => {
//     console.log("Successfully connected to MongoDB using Mongoose!");
//    });


//    var subscriber1 = new Subscriber({
//     name: "Jon Wexler",cd un
//    });
//    subscriber1.save((error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
//    });

// Subscriber.create(
//     {
//     name: "Jonny Wexler",
//     email: "jon@jonwexler.com"
//     })
// //     .then((result)=>{
// //         console.log("Printing result");
// //         console.log(result);


// //     })
// //     .catch((err)=>{
// //         console.log("Error Print");
// //         console.log(err);

// //     })
// //     function (error, savedDocument) {
// //     if (error) console.log(error);
// //     console.log(savedDocument);
// //     }
// //    );

// //Storing a query in a variable
//  let query = Subscriber.findOne({ name: "Jon Wexler" })
// .where("email", /wexler/);

// query.exec()
// .then((result)=>{
//     console.log("result1")
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("err1");
//     console.log(error);
// });

// //running a query without saving it
// Subscriber.findOne({ name: "Jon Wexler" })
// .where("email", /wexler/)

// .then((result)=>{
//     console.log("result2")
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("err1");
//     console.log(error);
// });



