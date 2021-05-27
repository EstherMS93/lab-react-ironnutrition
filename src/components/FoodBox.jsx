import React from "react"
import foods from "./../foods.json"

//to display the data we need a map function. The HTML will go in render() return
//if we use props, do we need states ?????
const FoodBox = (props) => {
return (

<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.props.image} alt="food" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.props.name}</strong> <br /> 
          <small>{props.props.calories} cal</small> 
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">Quantity: 
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
    ));
</div>
)}
 export default FoodBox;