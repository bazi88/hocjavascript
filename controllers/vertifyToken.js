const jwt = require('jsonwebtoken');
const config = require('../config.json');

function verifyToken(req,res,next){
	var token = req.headers['x-access-token'];
	if(!token)
		return res.status(403).send({ auth: false, message: 'No token provided.' })
		jwt.verify(token, config.secret,function(err,decode){
			if(err)
				return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' }); 
			res.send(decode.id);
			next();
		})
}
module.exports = verifyToken;