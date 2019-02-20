var Post = require('../models/post');
var Category = require('../models/category');

exports.getPost = function(req, res) {
    Category.find({}, function(err, category) {
        if (err)
            return res.send('Error when find category');
        Post.find({}, function(err, posts) {
            if (err)
                return res.send('Error when find post')
            res.render('post/index', {
                'posts': posts,
                'category': category
            })
        })
    })
}

exports.getDetailPost = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (err)
            return res.send("Error post details")
        res.render('post/detail', {
            'post': post
        })
    })
}

exports.createPost = function(req, res) {
    const postInsert = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        time: req.body.time,
        category: req.body.category,
    }
    console.log(postInsert)
    Post.create(postInsert, function(err, post) {
        if (err)
            res.send("Error when create post")
        res.render('post/create', {
            'success': 'Create post Success'
        })
    })
}