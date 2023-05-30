//Introduction to express

const express = require('express'); //require express module
const app = express() //calls express to start a new express app 

//Handling requests with express 
//This is also called Routing where we map 
//requests to specific handlers depending on their URL
app.get('/', (req, res) => {
    res.json({
        name: 'Greg Lim'
    })
})

//Asynchronous with call back functions
















app.listen(3000, () => {
    console.log("App listening on port 3000")
}); 