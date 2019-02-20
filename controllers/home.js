var Category = require('../models/category');

exports.homeView = function (req, res) {
	Category.find({}, function (err, category) {
		if(err) return res.send("Error in find category")
		res.render('homeAdmin', {
			'category': category
		});
	})

}
exports.addCategory = function (req, res) {
	Category.create({
		name: req.body.name,
		seo: req.body.seo,
	}, function (err, category) {
		if (err) return res.status(500).send("Error in database")
		res.status(200).send(category)
	});
}