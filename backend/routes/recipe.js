const router = require('express').Router();
const Recipe = require('../models/recipe.model');

router.route('/').get((req,res) => {
	Recipe.find()
	      .then(recipe => res.json(recipe))
	      .catch(err => res.status(400).json('Error:' +err));
});

router.route('/add').post((req,res) => {
	const foodname = req.body.foodname;
	const description = req.body.description;
	const cookingtime = Number(req.body.cookingtime);
	const date = Date.parse(req.body.date);

	const newRecipe = new Recipe({
		foodname,
		description,
		cookingtime,
		date,
	});

	newRecipe.save()
	   .then(() => res.json('Recipe added'))
	   .catch(err => res.status(400).json('Error: ' +err));
});
router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.username = req.body.username;
      recipe.description = req.body.description;
      recipe.cookingtime = Number(req.body.cookingtime);
      recipe.date = Date.parse(req.body.date);

      recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

