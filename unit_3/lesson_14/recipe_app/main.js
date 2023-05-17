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
const mongoose = require("mongoose");

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


//Listing 14.3:Subscriber schema 
const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number
});

//Applying a schema to a model
//The model is what you will use to instantiare new subscriber objects
const Subscriber = mongoose.model("Subscriber", subscriberSchema)


//listing 14.4: Statements to create and save models
var subscriber1 = new Subscriver({
  name: "Jon Wexler",
  email: "jon@jonwexler.com"
});

subscriber1.save()
  .then((result) => {
    console.log(result)
 })
 .catch((error) =>{ 
    console.log(error);

 });

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



















