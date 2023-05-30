const mongoose = require("mongoose"),

// Creates a subscriber model
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number
    });

module.exports = mongoose.model("Subscriber", subscriberSchema);