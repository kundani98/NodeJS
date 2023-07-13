const BlogPost = require('../models/BlogPost.js')
module.exports = async (req, res) =>{
 const blogposts = await BlogPost.find({}).populate('user')
 res.render('index',{
 blogposts
 });
}