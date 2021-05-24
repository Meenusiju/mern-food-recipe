import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeFoodname = this.onChangeFoodname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      foodname: ''
    }
  }

  onChangeFoodname(e) {
    this.setState({
      foodname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const food = {
      foodname: this.state.foodname
    }

    console.log(food);

    axios.post('http://localhost:5000/food/add', food)
      .then(res => console.log(res.data));

    this.setState({
      foodname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Food</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Foodname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.foodname}
                onChange={this.onChangeFoodname}
                style={{ width:"200px" }}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Food" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}