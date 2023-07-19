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
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

app.get('/', homeController)
app.get('/post/:id',storePostController)
app.get('/posts/new',newPostController)
app.post('/posts/store',getPostController)
app.get('/auth/register', newUserController)
app.post('/users/register', storeUserController)
app.get('/auth/login', loginController);
app.post('/users/login',loginUserController)


app.listen(3000, ()=>{
 console.log('App listening on port 3000')
});