import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCalories = (event) => {
    this.setState({
      calories: event.target.value,
    });
  };

  handleImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state)
  };

  render() { console.log(this.props)
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleName}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            value={this.state.calories}
            onChange={this.handleCalories}
            name="calories"
            placeholder="calories"
            id="calories"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            value={this.state.image}
            onChange={this.handleImage}
            type="url"
            alt="your food"
            name="image"
            placeholder="image"
            id="image"
          />
        </div>
        <button >Submit!</button>
      </form>
    );
  }
}

export default Form;
