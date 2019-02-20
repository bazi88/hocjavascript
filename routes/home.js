var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var HomeController = require('../controllers/home')

router.route('/')
    .get(HomeController.homeView)
module.exports = router;
