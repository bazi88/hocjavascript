var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../config.json');

exports.loginAdmin = function(req,res){
	console.log(req.body);
	var querry = {email:req.body.email};
	const admin =  Admin.findOne( querry ).exec().then(function(admin){
		if(admin.password === req.body.password){
			const token = jwt.sign({id:admin._id},config.secret,{ expiresIn: 86400 });
			res.json({success:true,message:"Login success",token:token});
		}else{
			return res.json({success:false,message:"Login failed"});
		}
	});
};
exports.loginAdminView = function(req,res){
	res.render('admin');
}
exports.homeAdmin = function(req,res){
	res.render('homeAdmin');
}