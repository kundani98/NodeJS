//MVC: Model-View-Controller 
//Templating allows you to code your views 
//with the ability to insert dynamic data


// //express post
// app.post("/contact", (req, res) => {
//     res.send("Contact information submitted successfully.");
//    });





// // Route parameters have a colon (:) before the parameter 
// // and can exist anywhere in the path
// // This structure is necessary for developing a representational state transfer 
// // (REST) architecture,
// app.get("/items/:vegetable", (req, res) => {
//     res.send(req.params.vegetable);
//     });





//Listing 9.3: Complete Express example
//require and instatiate app
const port = 3000,
 express = require("express"),
 app = express(),
 homeController =require("./controllers/homeController");

 //add a route using express get method
 app.get("/items/:vegetable", homeController.sendReqParam);;




//listing 9.4 Express.js middleware function for logging request path 



//listing 9.5 Capturing posted data from the request body
//how to test this???  
// app.use(
//     express.urlencoded({
//     extended: false
//     })
//    ); 
//    app.use(express.json());
//    app.post("/", (req, res) => {
//     console.log(req.body);
//     console.log(req.query);
//     res.send("POST Successful!");
//    });

app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});


//Using MVC(Model-View-Controller) 
