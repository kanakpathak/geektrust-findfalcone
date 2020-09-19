import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/arena.css";
import PropTypes from "prop-types";
// import Destination from "./Destination";
import DropDown from "../../../utils/dropDown";
import RadioButton from "../../../utils/radioButton";

const DisplayArena = ({ planets, vehicles }) => {
  const arr = new Array(4).fill("combobox");

  return (
    <div className="arenaContainer">
      <div>
        <h3>Select planets you want to search in:</h3>
      </div>
      <div className="destination">
        <div className="destinationContainer">
          {arr.map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="destinationCards" key={item + index}>
                <p>
                  Destination
                  {index + 1}
                </p>
                {/* <Destination /> */}
                <DropDown data={planets} />
                <RadioButton data={vehicles} />
              </div>
            );
          })}
        </div>
        <div>
          <h3>Time Taken: 0</h3>
        </div>
      </div>
      <div>
        <Link to="/result"> Find Falcone!</Link>
      </div>
    </div>
  );
};

DisplayArena.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DisplayArena;
