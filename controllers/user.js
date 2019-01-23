var User = require('../models/user');

exports.createUser = function(req,res){
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    },function(err,user){
        if(err) return res.status(500).send("Error in database")
        res.status(200).send(user)
    })
}

exports.getUser = function(req,res){
	User.find({},function(err,users){
		if(err) return res.status(500).send("Error in find user")
        res.status(200).send(users)
	})
}