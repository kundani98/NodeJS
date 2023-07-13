//Introduction to express

const express = require('express'); //require express module
const app = express() //calls express to start a new express app 
const path = require('path') 
app.use(express.static('public'))

//Handling requests with express 
//This is also called Routing where we map 
//requests to specific handlers depending on their URL
app.get('/',(req,res)=>{ 
    res.sendFile(path.resolve(__dirname,'index.html'))
   })

//Asynchronous with call back functions
//callback functions allow task to be done asynchronous 
//Node.js allows the possibility for tasks to be performed in parallel


//Serving other HTML files 
app.get('/about',(req,res)=>{ // called when request to /about comes in
    res.sendFile(path.resolve(__dirname,'about.html'))
   })

   app.get('/contact',(req,res)=>{ //called when request to /contact comes
    res.sendFile(path.resolve(__dirname,'contact.html'))
   })














app.listen(3000, () => {
    console.log("App listening on port 3000")
}); 