import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="navHeading">
        <h1>Finding Falcone!</h1>
      </div>
      <div className="navLinks">
        <div>
          <Link to='/'>Reset</Link>
        </div>
        <div>|</div>
        <div>Geek Trust Home</div>
      </div>
    </div>
  );
};

export default Header;
