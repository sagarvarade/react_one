import React from "react";

function PizzaComponent(props) {
  return (
    <>
      <li className="pizza">
        <img src={props.photoName} alt="Not Found" />
        <div >
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
        </div>
      </li>
    </>
  );
}

export default PizzaComponent;
