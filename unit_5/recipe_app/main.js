
// const MongoDB = require("mongodb").MongoClient,
//     dbURL = "mongodb://127.0.0.1:27017",
//     dbName = "recipe_db";



"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber"),
  subscribersController = require("./controllers/subscribersController");
  mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  {useNewUrlParser: true}
 );
//   mongoose.set("useCreateIndex", true);
  const db = mongoose.connection;
  
  db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
  });

  app.set("port", process.env.PORT || 3000);
  app.set("view engine", "ejs");
  
  app.use(express.static("public"));
  app.use(layouts);
  app.use(
    express.urlencoded({
      extended: false
    })
  );
 
  app.use(express.json());
  app.use(homeController.logRequestPaths);
  
  app.get("/contact", subscribersController.getSubscriptionPage);
 app.post("/subscribe", subscribersController.saveSubscriber);
 
  app.get("/name", homeController.respondWithName);
  app.get("/items/:vegetable", homeController.sendReqParam);
  
  app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
  }); 
  app.get("/subscribers", subscribersController.getAllSubscribers, 
   (req, res, next) => {
  console.log(req.data);
  res.render("subscribers", {subscribers: req.data})
  });
  app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


























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



