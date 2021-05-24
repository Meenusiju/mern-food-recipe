const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  foodname: { type: String, required: true },
  description: { type: String, required: true },
  cookingtime: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;