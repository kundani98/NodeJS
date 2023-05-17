//Testing models in REPL 

//Listing 17.4 Set up subscriber model in REPL in terminal 

//Require Mongose and connect to database,recipe db and tell mongose to us native promises
const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

//listing 17.5 Testing model methods and mongoose queries in REPL terminal
Subscriber.create({
    name: "Jon",
    email: "jon@jonwexler.com",
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

//listing 18.3 Creating a new user in REPL in terminal 
var testUser;
User.create({
    name: {
        first: "Jon",
        last: "Wexler"
    },
    email: "jon@jonwexler.com",
    password: "pass123"
})
    .then(user => testUser = user)
    .catch(error => console.log(error.message)); 

//listing 18.5 Connecting a subscriber to the user in REPL 
var targetSubscriber;
Subscriber.findOne({
 email: testUser.email
 })
 .then(subscriber => targetSubscriber = subscriber);



