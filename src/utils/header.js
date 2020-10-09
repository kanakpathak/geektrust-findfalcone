/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const history = useHistory();

  const onReset = () => {
    (window.location.pathname !== "/"
      ? history.push("/result")
      : window.location.reload())();
  };
  return (
    <div className="header">
      <div className="navHeading">
        <h1>Finding Falcone!</h1>
      </div>
      <div className="navLinks">
        <div
          style={{ cursor: "pointer", paddingRight: "5px" }}
          onClick={() => onReset()}
        >
          Reset
        </div>
        <>|</>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.geektrust.in/coding-problem"
          >
            Geek Trust Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
