const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const path = require('path');
const fileUpload = require('express-fileupload')

const app = new express();


app.set('view engine', ejs);



//custom middleware
const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title == null) {
        return res.redirect('/posts/new')
    }
    next()
}

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store', validateMiddleWare)

app.listen(3000, () => {
    console.log('App listening on port 4000')
});


mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    console.log(blogposts)
    res.render('index', {
        blogposts
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', async (req, res) => {
    let image = req.files.image
    image.mv(path.resolve(__dirname, 'public/img', image.name),
        async (error) => {
            await BlogPost.create({
                ...req.body,
                image: '/img/' + image.name
            })
            res.redirect('/')
        })



})