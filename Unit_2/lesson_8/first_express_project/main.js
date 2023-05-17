//express package:npm install express@4.16.3 --save.
// Middleware is a general term applied to code that assists in 
// listening for, analyzing, filtering, and handling HTTP communication
//  before data interacts with application logi



"use strict"

//Listing 8.1 Simple Express.js web application in main.js
const port = 3000,
 express = require("express"),
 app = express();

 //GET http method: to request data
 app.get("/",(req,res)=>{
    res.send("Hello, Programmers")
 }); 

 //POST http method: to send data
 app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
   });

//Using route parameters 
app.get("/items/:vegetable", (req, res) => {
    res.send(req.params.vegetable);
    });


 app.listen(port,()=>{
    console.log(`The Express.js server has started and is listening on port number: ${port}`); 
 });
/////////////////////////////////////////////////////////////////////////////

//Request object methods 
console.log("params" + req.params);
 console.log("body" + res.body);
 console.log("url" + req.url);
 console.log("query" + req.query);







