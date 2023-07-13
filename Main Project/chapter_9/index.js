const express = require('express');
const app = new express();
const ejs = require('ejs'); 
const mongoose = require('mongoose'); 
const fileUpload = require('express-fileupload');
const validateMiddleWare = require("./middleware/validateMiddleware");

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store', validateMiddleWare)


mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

app.get('/', homeController)
app.get('/post/:id',storePostController)
app.get('/posts/new',newPostController)
app.post('/posts/store',getPostController)


app.listen(3000, ()=>{
 console.log('App listening on port 3000')
});