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


//Add Mongodb connection 
const MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://127.0.0.1:27017",
  dbName = "recipe_db";

  //show collection
MongoDB.connect(dbURL, (error, client) => {
  if (error) throw error;
  let db = client.db(dbName);
  db.collection("contacts")
    .find()
    .toArray((error, data) => {
      if (error) throw error;
      console.log(data);
    });
});

//insert new document in collection
db.collection("contacts")
 .insert({
 name: "Freddie Mercury",
 email: "fred@queen.com"
 }, (error, db) => {
 if (error) throw error;
 console.log(db);
 });





















