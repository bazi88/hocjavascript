var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var AdminSchema = new mongoose.Schema({
    email:String,
    password:String,
})
var Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;