//controllers are the glue between your models (the data) and your views (the web page).


const Subscriber = require("../models/subscriber");


exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find( {})
    .then((result)=>{ 
     req.data = result
     next()
    })
    .catch((error) =>{ 
        next(error)

    });
}

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
   };
   
   exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
    });
    newSubscriber.save((error, result) => {
    if (error) res.send(error);
    res.render("thanks");
    });
   };
        
        
        
        
        
    






// exports.getSubscriptionPage = (req, res) => {
//  res.render("contact");
// };
// exports.saveSubscriber = (req, res) => {
//  let newSubscriber = new Subscriber({
//  name: req.body.name,
//  email: req.body.email,
//  zipCode: req.body.zipCode
//  });
 
//  newSubscriber.save() 
//  .then((result)=>{ 

//     res.render("thanks");
//  })
//  .catch((error)=>{
//     res.send(error)

//  })

// }