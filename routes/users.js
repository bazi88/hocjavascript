var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var UserController = require('../controllers/user')
/* GET users listing. */
router.route('/')
	.get(UserController.getUser)
  	.post(UserController.createUser)
module.exports = router;
