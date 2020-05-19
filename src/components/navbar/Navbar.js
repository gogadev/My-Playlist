import React from "react";

import img from "../../assets/img.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title"><span>M</span>y <span>P</span>laylist</h1>
      <div className="image">
        {" "}
        <img className="nav-img" src={img} alt="" />
      </div>{" "}
    </nav>
  );
};

export default Navbar;
