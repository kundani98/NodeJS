
//Set up mongoose model in REPL
const mongoose = require("mongoose"),
 Subscriber = require("./models/subscriber");
mongoose.connect(
 "mongodb://127.0.0.1:27017/recipe_db",
 {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;



//Create a new document in subscriber
Subscriber.create({
 name: "Jon",
 email: "jon@jonwexler.com",
 zipCode: "12345"
})
 .then(subscriber => console.log(subscriber))
 .catch(error => console.log(error.message));


//find a document with the name Jon
var subscriber;
Subscriber.findOne({
 name: "Jon"
}).then(result => {
 subscriber = result;
 console.log(subscriber.getInfo());
});


//Testing model associations using REPL 
const Course = require("./models/course");
var testCourse, testSubscriber;
Course.create( {
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
