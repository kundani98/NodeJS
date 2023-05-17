

//To organize our code we move our models in a separate file:
//Schema definition
const mongoose = require("mongoose"),
 subscriberSchema = mongoose.Schema({
 name: String,
 email: String,
 zipCode: Number
 });
module.exports = mongoose.model("Subscriber", subscriberSchema);