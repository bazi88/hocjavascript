var Post = require('../models/post');
var Category = require('../models/category');
exports.getPost = function(req, res) {
    Category.find({}, function(err, category) {
        console.log(category);
        if (err)
            return res.send('Error when find category');
        Post.find({}, function(err, posts) {
            console.log(posts);
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
        console.log(post);
        if (err)
            return res.send("Error post details")
        Category.find({}, function(err, category) {
            console.log(category)
            if (err)
                return res.send("Error get category")
            res.render('post/detail', {
                'post': post,
                'category': category,
            })
        })
    })
}

exports.createPost = function(req, res) {
    const post = req.body;
    console.log(post);

    const postInsert = {
        title: post.title,
        author: post.author,
        content: post.content,
        time: Date.now(),
        category: post.category,
    }
    Post.create(postInsert, function(err, post) {
        if (err)
            return res.send("Error when create post")
        var response = {
            status: 200,
            success: 'Create Successfully'
        }
        res.end(JSON.stringify(response));
    })
}

exports.updatePost = function(req, res) {
    var newObject = {
        title: req.body.title,
        author: req.body.author,
        time: req.body.time,
        category: req.body.category,
        content: req.body.content
    }
    Post.findByIdAndUpdate(req.params.id, newObject, function(err, category) {
        var response = {
            status: 200,
            success: 'Update Successfully'
        }
        if (err)
            res.send("err update")
        res.send(response);
    })
}

exports.deletePost = function(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, postDelete) {
        var response = {
            status: 200,
            success: 'Delete Successfully'
        }
        if (err)
            res.send(err)
        res.send(response);
    })
}