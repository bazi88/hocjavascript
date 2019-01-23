var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('./config.json');

exports.loginAdmin = function(req,res){
	var querry = {email:req.body.email};
	const admin =  Admin.findOne( querry ).exec().then(function(admin){
		if(admin.password === req.body.password){
			const token = jwt.sign({sub:admin._id},config.secret);
			console.log(token)
			return res.send(admin)
		}else{
			return res.status(401)
		}
	});
};
exports.loginAdminView = function(req,res){
	res.render('admin');
}