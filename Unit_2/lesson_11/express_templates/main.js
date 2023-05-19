
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
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));
//route for the path name
app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});
app.get("/name/:myName", homeController.respondWithName);

app.use(errorController.logErrors);

app.use(errorController.respondNoResourceFound);

app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});












