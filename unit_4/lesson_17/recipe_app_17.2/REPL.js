//Testing models in REPL 

//Listing 17.4 Set up subscriber model in REPL in terminal 

//Require Mongose and connect to database,recipe db and tell mongose to us native promises
const mongoose = require("mongoose"),
 Subscriber = require("./models/subscriber");
mongoose.connect(
 "mongodb://127.0.0.1:27017/recipe_db",
 {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;

//listing 17.5 Testing model methos and mongoose queries in REPL terminal

Subscriber.create({
    name: "Jon",
    email: "ken@jonwexler.com",
    zipCode: "12345"
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));

var subscriber;
Subscriber.findOne({
    name: "Jon"
}).then(result => {
    subscriber = result;
    console.log(subscriber.getInfo());
});

//17.3 Creating model associations
// data is structured with MongoDB and Mongoose acts as 
//a layer over the database to map documents to JavaScript objects.

//listing 17.6 Creating a new schema and model in course.js

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    items: [],
    zipCode: {
        type: Number,
        min: [10000, "Zip code too short"],
        max: 99999
    }
});
module.exports = mongoose.model("Course", courseSchema);

//listing 17.7: Testing model associations using REPL in terminal 
const Course = require("./models/course");
var testCourse, testSubscriber;
Course.create({
    title: "Tomato Land",
    description: "Locally farmed tomatoes only",
    zipCode: 12345,
    items: ["cherry", "heirloom"]
}).then(course => testCourse = course);
Subscriber.findOne({}).then(
    subscriber => testSubscriber = subscriber
);

testSubscriber.courses.push(testCourse._id);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);

// //listing 17.9 
// const mongoose = require("mongoose"),
//  Subscriber = require("./models/subscriber"),
//  Course = require("./models/course");
// var testCourse,
//  testSubscriber;
// mongoose.connect(
//  "mongodb://localhost:27017/recipe_db",
//  {useNewUrlParser: true}
// );
// mongoose.Promise = global.Promise;
// Subscriber.remove({})
//  .then((items) => console.log(`Removed ${items.n} records!`))
//  .then(() => {
//  return Course.remove({});
//  })
//  .then((items) => console.log(`Removed ${items.n} records!`))
//  .then(() => {
// return Subscriber.create( {
// name: "Jon",
// email: "jon@jonwexler.com",
// zipCode: "12345"
// });
//  })
//  .then(subscriber => {
//  console.log(`Created Subscriber: ${subscriber.getInfo()}`);
//  })
//  .then(() => {
//  return Subscriber.findOne( {
// name: "Jon"
//  });
//  })
//  .then(subscriber => {
//  testSubscriber = subscriber;
//  console.log(`Found one subscriber: ${subscriber.getInfo()}`);
//  })
// .then(() => {
// return Course.create({
// title: "Tomato Land",
// description: "Locally farmed tomatoes only",
// zipCode: 12345,
// items: ["cherry", "heirloom"]
// });
//  })
//  .then(course => {
//  testCourse = course;
//  console.log(`Created course: ${course.title}`);
//  })
//  .then(() => {
// testSubscriber.courses.push(testCourse);
//  testSubscriber.save();
//  })
//  .then( () => {
// return Subscriber.populate(testSubscriber, "courses");
//  })
//  .then(subscriber => console.log(subscriber))
//  .then(() => {
// return Subscriber.find({ courses: mongoose.Types.ObjectId( 
// ➥ testCourse._id) });
// })
// .then(subscriber => console.log(subscriber));
