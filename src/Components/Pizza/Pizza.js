import React from "react";
import PizzaComponent from "./PizzaComponent";
//import { ReactDOM } from "react";
import pizzaData from "./data";

import "./index.css"
const Header = () => {
  const str={ color: "red" ,fontSize:"25px",textTransform:"uppercase"};
  return (
    <div className="header footer">
      <h1 style={str}><b>The React Pizza Company</b></h1>
    </div>
  );
};

const Menu = () => {
    console.log(pizzaData)
  /*return (pizzaData.forEach(element => {
    <div className="menu">
      <h2>Our Menu</h2>
      <PizzaComponent title={element.name} image={element.image} ingredients={element.ingredients}/>
    </div>
  })); */
  return (
    <div className="menu">
        {/* <PizzaComponent title="s" image="1.jpg" ingredients="Coke"/> */}
      <h2>Our Menu</h2>
      {
          pizzaData.map((element,key) => {
            return <PizzaComponent key={key} {...element}/>
          })
      }
    </div>
  );


};

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);

  return (
    <footer className="header footer">
      <h4>{new Date().toLocaleTimeString()} We Are closing Soon !!</h4>
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
