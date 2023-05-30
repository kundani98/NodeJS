const express = require('express');
const app = new express();
const ejs = require('ejs'); 
const mongoose = require('mongoose'); 
const BlogPost = require('./models/BlogPost');


app.use(express.static('public'));
app.set('view engine', ejs);//creating page routes

mongoose.connect('mongodb://127.0.0.1/my_database',{useNewUrlParser:true});

// //respond with static HTML file
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
//    })

//responding with templating engine
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})
app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})
app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})




app.listen(3000, ()=>{
 console.log('App listening on port 4000')
});