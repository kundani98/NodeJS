


//connect
const mongoose = require("mongoose"),
Subscriber = require("./models/subscriber");
mongoose.connect(
"mongodb://127.0.0.1:27017/recipe_db",
{useNewUrlParser: true}
);
mongoose.Promise = global.Promise;



//create
Subscriber.create({
name: "John",
email: "john@gmail.com",
zipCode: 10000
})
.then((result) => {
console.log("result");
console.log(result);
})
.catch((err) => {
console.log("err");
console.log(err);
})

Subscriber.create({
name: "Kundani",
email: "Kundani@gmail.com",
zipCode: 12345
})
.then((result) => {
console.log("result");
console.log(result);
})
.catch((err) => {
console.log("err");
console.log(err);
})

//findone 
