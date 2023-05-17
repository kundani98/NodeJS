

//Moved from main to homeController:Route callback functio

// (req, res) => {
//     let veg = req.params.vegetable;
//     res.send(`This is the page for ${veg}`);
//    }

   exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
   };
   exports.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    //call the next function
    next();
   });