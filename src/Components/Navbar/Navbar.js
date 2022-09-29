import React from "react";
import "./NavbarComp.css";
import account from "../../Assests/Vector.png";
import search from "../../Assests/Vector1.png";
import cart from "../../Assests/Vector2.png";
import love from "../../Assests/Vector3.png";
function Navbar() {
  return (
    <div className="navbar-comp">
      <div className="navbar-left">
        <div className="navbar-title">
          <h3>AccioJob</h3>
        </div>
        <div className="navbar-main">
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Pages</p>
        </div>
      </div>
      <div className="navbar-right">
        <img src={account} alt="account" />
        <p>Login / Register</p>
        <img src={search} alt="" />
        <img src={cart} alt="" />
        <img src={love} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
