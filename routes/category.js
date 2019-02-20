var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var CategoryController = require('../controllers/category')

router.route('/')
    .get(CategoryController.categoryIndex)
router.route('/create')
    .get(CategoryController.categoryCreate)
    .post(CategoryController.categoryAdd)
router.route('/:id')
    .get(CategoryController.categoryId)
router.route('/:id/update')
    .get(CategoryController.categoryUpdate)
    .post(CategoryController.actionUpdate)
router.route('/:id/delete')
    .get(CategoryController.categoryDelete)
    .post(CategoryController.actionDelte)
module.exports = router;