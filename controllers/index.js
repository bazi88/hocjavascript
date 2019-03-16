var Category = require('../models/category');
var Post = require('../models/post');

exports.getIndex = function(req,res){
    Category.find({}, function(err, category) {
        if (err)
            return res.send('Error when find category');
        Post.find({}, function(err, posts) {
            console.log(posts,category)
            if (err)
                return res.send('Error when find post')
            res.render('index', {
                'posts': posts,
                'category': category
            })
        })
    })
}