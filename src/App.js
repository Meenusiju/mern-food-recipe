import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import RecipeList from "./components/recipe-list.component";
import EditRecipe from "./components/edit-recipe.component";
import CreateRecipe from "./components/create-recipe.component";
import CreateFood from "./components/create-food.component";

function App() {
  return (
    <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={RecipeList} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/create-recipe" component={CreateRecipe} />
        <Route path="/create-food" component={CreateFood} />
    </Router>
  );
}

export default App;
