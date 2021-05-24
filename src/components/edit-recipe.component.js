import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EidtRecipe extends Component {

    constructor(props){
    	super(props);

    	this.onChangeFoodname = this.onChangeFoodname.bind(this);
    	this.onChangeDescription = this.onChangeDescription.bind(this);
    	this.onChangeCookingtime = this.onChangeCookingtime.bind(this);
    	this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

    	this.state = {
    		foodname: '',
    		description: '',
    		cookingtime: 0,
    		date: new Date(),
    		foods: []
    	}

    }

    componentDidMount(){
    	axios.get('http://localhost:5000/recipe/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          foodname: response.data.foodname,
          description: response.data.description,
          cookingtime: response.data.cookingtime,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    	axios.get('http://localhost:5000/food/')
              .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        foods: response.data.map(food => food.foodname),
                        
                    })
                }
              })
              .catch((error) =>{
                console.log(error);
              })
    }

    onChangeFoodname(e){
    	this.setState({
    		foodname: e.target.value
    	})
    }
    onChangeDescription(e){
    	this.setState({
    		description: e.target.value
    	});
    }
    onChangeCookingtime(e){
    	this.setState({
    		cookingtime: e.target.value
    	});
    }
    onChangeDate(date){
    	this.setState({
    		date: date
    	});
    }
    onSubmit(e) {
    e.preventDefault();

    const recipe = {
      foodname: this.state.foodname,
      description: this.state.description,
      cookingtime: this.state.cookingtime,
      date: this.state.date
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipe/update/' + this.props.match.params.id, recipe)
      .then(res => console.log(res.data));

    window.location = '/';
    }

	render() {
		return (
              <div>
                   <h3>Edit Recipe</h3>
                   <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                         <label>Foodname: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.foodname}
                                    onChange={this.onChangeFoodname}/>    
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}/>    
                        </div>
                        <div className="form-group">
                             <label>CookingTime: </label>
                             <input type="text"
                                     required
                                     value={this.state.cookingtime}
                                     onChange={this.onChangeCookingtime}/>
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                             <div>
                                <DatePicker
                                     selected={this.state.date}
                                     onChange={this.onChangeDate}
                                />
                              </div>  
                        </div>     
                        <div className="form-group">
                             <input type="submit" value="Edit Recipe" className="btn btn-primary"/>                      

                        </div>
                   </form>
              </div>
			)
}
}