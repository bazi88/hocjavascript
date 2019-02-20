var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../config.json');

exports.loginAdmin = function(req,res){
	var querry = {email:req.body.email};
	const admin =  Admin.findOne( querry ).exec().then(function(admin){
		if(admin.password === req.body.password){
			const token = jwt.sign({id:admin._id},config.secret,{ expiresIn: 86400 });
			res.status(200)
				.cookie('token',token,{ maxAge: 2*60*60*1000 });
			// res.json({success:true,message:"Login success",token:token});
			res.redirect('/home');
		}else{
			return res.json({success:false,message:"Login failed"});
		}
	});
};
exports.loginAdminView = function(req,res){
	res.render('admin');
}
