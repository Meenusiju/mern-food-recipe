import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

	render() {
		return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">FoodRecipe</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Recipes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-recipe" className="nav-link">Create Recipe</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-food" className="nav-link">Create Food</Link>
          </li>
        </ul>
        </div>
      </nav>
	);
	}
}