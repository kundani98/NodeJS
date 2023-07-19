const express = require('express');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const validateMiddleWare = require("./middleware/validateMiddleware");
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store', validateMiddleWare)
app.get('/posts/new',authMiddleware, newPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware,storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController)
app.use(expressSession({
    secret: 'keyboard cat'
}))

global.loggedIn = null;
app.use("*", (req, res, next) => {
 loggedIn = req.session.userId;
 next() 
});

mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const logoutController = require('./controllers/logout')

app.get('/', homeController)
app.get('/post/:id', storePostController)
app.get('/posts/new', newPostController)
app.post('/posts/store', getPostController)
app.get('/auth/register', newUserController)
app.post('/users/register', storeUserController)
app.get('/auth/login', loginController);
app.get('/auth/logout', logoutController)
app.use((req, res) => res.render('notfound'));


app.listen(3000, () => {
    console.log('App listening on port 3000')
});