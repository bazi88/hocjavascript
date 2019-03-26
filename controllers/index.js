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

            // write with random category
            var newPost = [...posts];
            var newPosts = [...posts];
            var n=6;
            var k = 1;
            var shuffled = newPosts.sort(function(){return .5 - Math.random()});
            var shuffledHotRandom = newPost.sort(function(){return .5 - Math.random()});
            var selected=shuffled.slice(0,n);
            var selectedHotRandom=shuffledHotRandom.slice(0,k);
            for(var i = 0;i<selectedHotRandom.length;i++){
                var selectedHotRandoms = selectedHotRandom[i];
            }

            
            res.render('index', {
                'posts': posts,
                'category': category,
                'postsRandom': selected,
                'postsHotRandom' : selectedHotRandoms,
            })
        })
    })
}