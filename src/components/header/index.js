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
        <>
          <Link to="/">Reset</Link>
        </>
        <> | </>
        <>Geek Trust Home</>
      </div>
    </div>
  );
};

export default Header;
