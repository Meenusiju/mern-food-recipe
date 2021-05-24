const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req,res) => {
	Food.find()
	    .then(food => res.json(food))
	    .catch(err => res.status(400).json('Error:' +err));
});

router.route('/add').post((req,res) => {
	const foodname = req.body.foodname;
	const newFood = new Food({foodname});

	newFood.save()
	       .then(() => res.json('Food added'))
	       .catch(err => res.status(400).json('Error:' +err));

});

module.exports = router;