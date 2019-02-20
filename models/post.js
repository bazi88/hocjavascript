var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    time: Date,
    category: Array,
})
var Post = mongoose.model('Post', PostSchema);
module.exports = Post;