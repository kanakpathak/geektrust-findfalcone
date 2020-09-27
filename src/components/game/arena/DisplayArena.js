import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Destination from "./Destination";
import "../../../styles/arena.css";
import { PlanetsContext } from "../../../context/planetsContext";
import { DropDownContext } from "../../../context/dropDownContext";

const DisplayArena = () => {
  const { planets } = useContext(PlanetsContext);
  const { dropDown, setDropDown } = useContext(DropDownContext);
  const [desArray, setDesArray] = useState([]);
  const desCardlength = 4;
  const [computedTime, setComputedTime] = useState(0);

  const setDropDownOptions = () => {
    const arr = [];
    planets.map((planet, index) => {
      return arr.push({
        value: planet.name,
        label: planet.name,
        isDisabled: false,
        index
      });
    });
    setDropDown([...arr]);
  };

  useEffect(() => {
    setDropDownOptions();
  }, [planets]);

  const setDestinationArray = () => {
    const arr = [];
    new Array(desCardlength).fill("destination").map(() => {
      return arr.push({
        options: -1,
        vehicles: -1
      });
    });
    setDesArray([...arr]);
  };

  useEffect(() => {
    setDestinationArray();
  }, []);

  const onSelected = (event, index) => {
    // 1. toggle previous option
    // 2. set new option
    // 3. change state
    console.log("event", event);
    // updating options Array with isDisabled toggle
    const oldOption = desArray[index].options;

    // setting newly selected value option as disabled
    const newOptions = JSON.parse(JSON.stringify(dropDown));
    newOptions[event.index].isDisabled = true;

    /* if oldOption !== -1, then other previous value is there, 
       which now need to be enabled */
    if (oldOption !== -1) {
      console.log("inside if");
      newOptions[oldOption].isDisabled = false;
    }

    setDropDown([...newOptions]);

    // updating desArray with new optionIndex
    const dest = JSON.parse(JSON.stringify(desArray));
    dest[index].options = event.index;
    setDesArray([...dest]);
  };

  return (
    <div className="arenaContainer">
      <>
        <h3>Select planets you want to search in:</h3>
      </>
      <div className="destination">
        <div className="destinationContainer">
          {desArray.map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="destinationCards" key={index}>
                <p>
                  Destination
                  {index + 1}
                </p>
                <Destination
                  onSelected={event => onSelected(event, index)}
                  des={desArray[index]}
                />
              </div>
            );
          })}
        </div>
        <>
          <h3>Time Taken: {computedTime}</h3>
        </>
      </div>
      <>
        <Link to="/result"> Find Falcone!</Link>
      </>
    </div>
  );
};

export default DisplayArena;
