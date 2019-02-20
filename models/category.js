var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: String,
    seo: String,
})
var Category = mongoose.model('Category', CategorySchema)
module.exports = Category;