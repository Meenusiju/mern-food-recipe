const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true}
	);

const connection = mongoose.connection;
connection.once('open',()=>{
	console.log("Mongo Db connected");
})

const foodRouter = require('./routes/food');
const recipeRouter = require('./routes/recipe');

app.use('/food', foodRouter);
app.use('/recipe', recipeRouter);
//admin, pw: my_password
app.listen(port,() => {
	console.log(`Server running on port ${port}`);
});