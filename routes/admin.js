var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var AdminController = require('../controllers/admin')
/* GET users listing. */
router.route('/')
	.get(AdminController.loginAdminView)
  	.post(AdminController.loginAdmin)
router.route('/home')
	.get(AdminController.homeAdmin)
module.exports = router;
