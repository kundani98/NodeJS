// /A views folder to hold my HTML pages
//  A controllers folder to hold any routing functions
// A public folder with css, js, and images folders within to hold my client-side assets

//Required Modules
const express = require("express"),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts");

//instantiating a express object
const app = express();


app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

//Access Public folder
app.use(express.static("public"));

//templating engine
app.set('view engine', 'ejs');
app.use(layouts);
app.set("port", process.env.PORT || 3000);

//Error handling routes
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);



//Adding routes for each page
app.get("/", homeController.showIndex);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


//listening for requests
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});