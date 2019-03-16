var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var ImageController = require('../controllers/image')
    /* GET users listing. */
router.route('/')
    .get(ImageController.getImage)
module.exports = router;