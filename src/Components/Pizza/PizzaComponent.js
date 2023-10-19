import React from "react";

function PizzaComponent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.ingredients}</h3>
      <h3>{props.price}</h3>
      <img src={props.photoName} alt="Not Found" />
    </div>
  );
}

export default PizzaComponent;
