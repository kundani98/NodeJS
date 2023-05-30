const express = require('express');
const app = new express();


app.use(express.static('public'));


//respond with static HTML file
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
   })





app.listen(3000, ()=>{
 console.log('App listening on port 4000')
});