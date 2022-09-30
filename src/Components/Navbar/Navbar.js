import React from "react";
import "./NavbarComp.css";
import account from "../../Assests/Vector.png";
import search from "../../Assests/Vector1.png";
import cart from "../../Assests/Vector2.png";
import love from "../../Assests/Vector3.png";

import { CounterContext } from "../CounterContext";


function Navbar() {

  const {counter} = React.useContext(CounterContext)
  

  return (
    <div className="navbar-comp">
      <div className="navbar-left">
        <div className="navbar-title">
          <h3>AccioJob</h3>
        </div>
        <div className="navbar-main">
          <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
          </ul>
          
        </div>
      </div>
      <div className="navbar-right">
        <img src={account} alt="account" />
        <p>Login / Register</p>
        <img src={search} alt="" />
        <div className="cart-orders">
        <img src={cart} alt="" />
          <span className="cart-counter">{counter}</span>
        </div>
        <img src={love} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
