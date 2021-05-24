const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
	foodname: {
	type: String,
	required: true,
	unique: true,
	trim: true,
	minlength: 3
    },
}, {
	timestamps: true,
});
 
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;