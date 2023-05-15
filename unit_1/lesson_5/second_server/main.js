//Routing is a way for your application to determine how to respond to a requesting client


    const port = 3000,//Using port 300 to connect
    http = require("http"),//We require the modules we want to use
    httpStatus = require("http-status-codes"),
    app = http.createServer();//create a instance of a http server called app
    


//Listing 5.1:A simple server with a request event listner 
app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
    });
    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);
   });
   app.listen(port);
   console.log(`The server has started and is listening on port number: ${port}`);

   // listing 5.2:Logging request data in main.js
   console.log(req.method);
   console.log(req.url);
   console.log(req.headers);

   //listing 5.3 convert a javascript  object to string
   const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
   };

app.on("request", (req, res) => {
    const getJSONString = obj => {
        return JSON.stringify(obj, null, 2);//Turn a JSON object into a string
       };

//     console.log(`.....Method..  ${getJSONString (req.method)}`);
//     console.log(`.....URL....:  ${getJSONString ( req.url)}`);
//     console.log(`....Headers..: ${getJSONString (req.headers)}`);
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
//     let responseMessage = "<h1>This will show on the screen.</h1>";
//     res.end(responseMessage);
// });

// app.listen(port);
// console.log(`The server has started and is listening on port number: 
//  ${port}`); 


// listing 5.4 Handling posted request data

//listen for request
app.on("request", (req, res) => {
    var body = [];
    req.on("data", (bodyData) => {
    body.push(bodyData);
    });

    //run code when data transmission ends
    req.on("end", () => {
   //convert array to  string
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
    });
    //log content into console
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
        });
        let responseMessage = "<h1>This will show on the screen.</h1>";
        res.end(responseMessage);
       });
       app.listen(port);
       console.log(`The server has started and is listening on port number:
       ➥ ${port}`);


    var body = [];
    req.on("data", (bodyData) => {
    body.push(bodyData);
    });
    req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
    });
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
        });
        let responseMessage = "<h1>This will show on the screen.</h1>";
        res.end(responseMessage);
       });

       
       app.listen(port);
       console.log(`The server has started and is listening on port number:
       ${port}`);
