const mongoose = require("mongoose");
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

//Data relationships
// One-to-one When one model can have an association to another model. This association could 
// be a User with one Profile; that profile belongs only to the user.

// One-to-many When one model can have many associations to another model, but the other 
// model can have only a single association back to the first model. This association 
// could be a Company with many instances of Employee. In this example, the employees work for only one company, and that company has many employees.

// Many-to-many When many instances of one model can have multiple associations to another 
// model, and vice versa. Many Theatre instances could show the same Movie
// instances, and each Movie can be traced to many Theatre instances. Typically, a 
// join table is used to map records to one another in a relational database.