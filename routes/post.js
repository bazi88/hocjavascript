var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var PostController = require('../controllers/post')
    /* GET users listing. */
router.route('/')
    .get(PostController.getPost)
    .post(PostController.createPost)
router.route('/:id')
    .get(PostController.getDetailPost)
    .post(PostController.updatePost)
module.exports = router;