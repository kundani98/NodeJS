//Required Modules
const mongoose = require("mongoose"),
subscribersController = require("./controllers/subscribersController");
express = require("express"),
homeController = require("./controllers/homeController"),
layouts = require("express-ejs-layouts");

//instantiating a express object
const app = express();

//connect to mongoose
mongoose.connect(
    "mongodb://127.0.0.1:27017/confetti_cuisine",
    { useNewUrlParser: true }
);

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
// app.use(errorController.pageNotFoundError);
// app.use(errorController.internalServerError);



//Adding routes for each page
app.get("/", homeController.showIndex);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

//subscriber routes
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

//listening for requests
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
