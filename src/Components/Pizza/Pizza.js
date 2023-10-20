import React from "react";
import PizzaComponent from "./PizzaComponent";
//import { ReactDOM } from "react";
import pizzaData from "./data";

import "./index.css";
const Header = () => {
  const str = { color: "red", fontSize: "25px", textTransform: "uppercase" };
  return (
    <div className="header footer">
      <h1 style={str}>
        <b>The React Pizza Company</b>
      </h1>
    </div>
  );
};

const Menu = () => {
  //const pizzas=[];
  const pizzas = pizzaData;
  console.log(pizzaData);
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((element, key) => {
            return <PizzaComponent key={key} {...element} />;
          })}
        </ul>
      )}
    </div>
  );
};

const Footer = () => {
  //const hour = new Date().getHours();
  const hour = 40;
  const openHour = 1;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00 .
      </p>
    );

    return (
      <footer className="footer">
        {/* <h4>{ isOpen && <p> We are open </p> }</h4> */}
        <h4>{isOpen ? <p> We are open </p> : <p>XX</p>}</h4>
        <button className="btn">Order</button>
      </footer>
    );
};

function Pizza() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default Pizza;
