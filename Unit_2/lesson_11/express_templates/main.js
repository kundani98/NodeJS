
// Templating allows you to code your views 
//with the ability to insert dynamic data
//In this code, you use the EJS syntax <% %> to define 
//and assign a variable within your view.
//Everything within these characters runs as valid
//JavaScript
//. By using <%= %>, you’re 
//able to print that variable’s value within the HTML tag
"use strict";




//listing 10.1:Sample EJS content in your index.ejs view 
// <% let name = "Jon"; %>
// <h1> Hello, <%= name %> </h1>


const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");
app.use(layouts);
app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

//route for the path name
app.get("/name/:myName", homeController.respondWithName);



app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});












