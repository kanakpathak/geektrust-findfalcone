import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { PlanetsContext } from "../context/planetsContext";
import "../styles/destination.css";

const RadioButton = ({ options, onSelected, desCard }) => {
  const [value, setValue] = useState("");
  const { planets } = useContext(PlanetsContext);
  const { planetIndex, vehicleIndex } = desCard;

  const onValueChange = (event, index) => {
    setValue(event.target.value);
    onSelected(index);
  };

  useEffect(() => {
    if (vehicleIndex === -1) setValue("");
  }, [desCard]);

  return (
    <div>
      {options.map((item, index) => {
        const isDisabled =
          item.max_distance < planets[planetIndex].distance ||
          item.total_no < 1;
        return (
          <div
            key={item.name}
            className={`radioButton ${isDisabled ? "disableButton" : ""}`}
          >
            <input
              type="radio"
              value={item.name}
              checked={value === item.name}
              onChange={event => onValueChange(event, index)}
              disabled={isDisabled}
            />
            {`${item.name} (${item.total_no})`}
          </div>
        );
      })}
    </div>
  );
};

RadioButton.propTypes = {
  options: PropTypes.arrayOf(Object).isRequired,
  onSelected: PropTypes.func.isRequired,
  desCard: PropTypes.objectOf(Number).isRequired
};

export default RadioButton;
