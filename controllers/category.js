var Category = require('../models/category');

exports.categoryIndex = function (req, res) {
	Category.find({}, function (err, category) {
		if (err) return res.send("Error in find category")
		res.render('categoryAdmin', {
			'category': category
		});
	})

}
exports.categoryAdd = function (req, res) {
	const dataInsert = {
		name: req.body.name,
		seo: req.body.seo
	}
	Category.create(dataInsert, function (err, result) {
		if (err)
			return res.send("Error insert category")
		res.render('categoryCreate',{
			'success': 'Add Success'
		});
	})
}

exports.categoryCreate = function (req, res) {
	res.render('categoryCreate')
}
exports.categoryId = function (req, res) {
	Category.findById(req.params.id, function (err, category) {
		if (err)
			return res.send("Error category details")
		res.render('categoryId', {
			'category': category
		})
	})
}
exports.categoryUpdate = function (req, res) {
	Category.findById(req.params.id, function (err, category) {
		if (err)
			return res.send("Error category details")
		res.render('categoryUpdate', {
			'category': category
		})
	})
}
exports.actionUpdate = function (req, res) {
	Category.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, function (err, category) {
		if (err)
			return res.send("Error")
		res.render('categoryUpdate', {
			'success': 'Update Success'
		})
	})
}
exports.categoryDelete = function (req, res) {
	res.render('categoryDelete')
}
exports.actionDelte = function (req, res) {
	Category.findByIdAndDelete(req.params.id,function (err) {
        if (err) return next(err);
		res.render('categoryDelete',{
			'success': 'Delete Success'
		})
	})
}