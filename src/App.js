import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Form from './components/Form'


class App extends React.Component {
  //the states go here
  state = {
    foods: foods,
    displayForm: false,
     // we want to set the status to false initially so that the form is not displayed UNLESS it's triggered by onClick, for which we need to set a new state and copy the elements with the spread operator 
  };

    //the logic goes here

  displayForm = () => {
    const foodsCopy = [...this.state.foods];
    const showForm = !this.state.foods.displayForm; //on click, the state has to be the opposite of default

    this.setState({ foods: foodsCopy, displayForm: showForm });
  };

  addFood = (food) => {
    //console.log('added')
    this.setState({ foods: [food, ...this.state.foods] });
  };  //with push maybe?

    //the result goes here 

    render() {
      return (
        <div className="App">
          
    {this.state.foods.map ((food, index) => <FoodBox props= {food}/>)}
          
          <button onClick={this.displayForm} className="button">
            Add new foods
        </button>
        {this.state.displayForm  && (
          <Form addFood={this.addFood} /> )} 
        </div>
      );
    }
  }

  export default App;
