const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = async (req, res) => {
    let imgPath;
    let imgResult;

    try {
        let image = req.files.image;
        imgResult = await image.mv(path.resolve(__dirname, '..', 'public/assets/img', image.name));
        imgPath = '/assets/img/' + image.name;
    } catch (error) {
        imgPath = null;
        
    }

    try {
        await BlogPost.create({
            ...req.body,
            image: imgPath,
            userid: req.session.userId
        })
    } catch (error) {
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        console.log("222" , error)
        req.flash('validationErrors', validationErrors)
        req.flash('data', req.body)

        return res.redirect('/posts/new');

       
    }

    res.redirect('/')
}