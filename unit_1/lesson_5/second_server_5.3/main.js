//Routing is a way for your application to determine how to respond to a requesting client


// // listing 5.4 Handling posted request data

// //listen for request
// app.on("request", (req, res) => {
//     var body = [];
//     req.on("data", (bodyData) => {
//     body.push(bodyData);
//     });

//     //run code when data transmission ends
//     req.on("end", () => {
//    //convert array to  string
//     body = Buffer.concat(body).toString();
//     console.log(`Request Body Contents: ${body}`);
//     });
//     //log content into console
//     console.log(`Method: ${getJSONString(req.method)}`);
//     console.log(`URL: ${getJSONString(req.url)}`);
//     console.log(`Headers: ${getJSONString(req.headers)}`);

//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//         });
//         let responseMessage = "<h1>This will show on the screen.</h1>";
//         res.end(responseMessage);
//        });
//        app.listen(port);
//        console.log(`The server has started and is listening on port number: ${port}`);



//Adding routes to a web application 
//Routing is a way for your application to determine how to respond to a requesting client 
//listing 5.6 Simple routing in a web server
//define mapping of routes with responses
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
   };

   const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
   
    app = http.createServer((req, res) => {
    res.writeHead(200, {
   "Content-Type": "text/html"
    });
   
    //Check whether a request route is defined in the map
    if (routeResponseMap[req.url]) {
   res.end(routeResponseMap[req.url]);
    } else {
        res.end("<h1>Your route is not defined in the map</h1>");
 }
 });

 app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`); 

//Route with a timer
// setTimeout(() => res.end(routeResponseMap[req.url]), 2000);