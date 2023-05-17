//Mongoose queries 
//find 
//findOne 
//findById 
//remove


//Listing 17.2 Adding validations on the models 
const mongoose = require("mongoose");
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
    }
});
module.exports = mongoose.model("Subscriber", subscriberSchema);


//Listing 17.3 Adding instance methods to the schema 
subscriberSchema.methods.getInfo = function () {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
    return this.model("Subscriber")
        .find({ zipCode: this.zipCode })
        .exec();
};












/////////////////////////////////////////////////

// const mongoose = require("mongoose");


// const subscriberSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         unique: true
//     },
//     zipCode: {
//         type: Number,
//         min: [10000, "Zip code too short"],
//         max:99999

//     },




// });
// module.exports = mongoose.model("Subscriber", subscriberSchema);

// subscriberSchema.methods.getInfo = function () {
//     return `Name: ${this.name} Email: ${this.email} Zip Code:
//    ➥ ${this.zipCode}`;
// };


var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }];
module.exports = {
    showCourses: (req, res) => {

        res.render("courses", {
            offeredCourses: courses
        });
    }
};

