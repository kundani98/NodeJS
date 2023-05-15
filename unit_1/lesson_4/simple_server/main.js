//Node package manager(npm) commands to know 
//npm init:Initializes a Node.js application and creates a package.json file 
//http-status-codes: npm i http-status-codes -S
//npm install: Installs a Node.js package 
//npm publish 
//npm start:Runs your Node.js application (provided that the package.json file is set 
//up to use this command)
//npm stop:Quits the running application



//Required Node.js Modules
const port = 3000;
http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

app.on("request", (req, res) => {

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    
    //Response Message
    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);
    
    console.log("****Method**** " + req.method);
    console.log("****URL***** " + req.url);
    console.log("****Headers***** " + req.headers);

});

app.listen(port);
console.log(`The server has started and is listening on port number ${port}`);







//  A callback is an anonymous function (a function without a name) that’s set up to be
// invoked as soon as another function completes. The benefit of using callbacks is that you
// don’t have to wait for the original function to complete processing before running other
// code
