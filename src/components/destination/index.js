/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, {  useEffect, useContext, useState } from "react";
import { GameContext } from "../../context/gameContext";
import "../../styles/destination.css";
import DisplayPlanet from "./DisplayPlanet";
import DisplayVehicle from "./DisplayVehicle";
import { ApiContext } from "../../context/apiContext";

const Destination = () => {
  const { planets } = useContext(ApiContext);  
  const { time, destination, setDestination } = useContext(GameContext);
  const [planetCheckList, setPlanetCheckList] = useState([]);

  const setInitialState = () => {
    const arr = new Array(planets.length).fill(false);
    const desArr = new Array(4).fill({
      planetIndex: -1,
      vehicleIndex: -1
    });
    setPlanetCheckList([...arr]);
    setDestination([...desArr]);
  };

  useEffect(() => {
    setInitialState();
  }, [planets]);
  

  return (
    <div className="container">
      <div className="destination">
        {destination.map((item, index) => {
          return (
            <div className="destinationCard" key={index}>
              <p>{`Destination ${index + 1}`}</p>
              <DisplayPlanet
                selectPlanet={() => setPlanetCheckList([...planetCheckList])}
                planetCheckList={planetCheckList}
                cardIndex={index}
              />
              <DisplayVehicle cardIndex={index} />
            </div>
          );
        })}
      </div>
      <div style={{ margin: "0px 50px" }}>
        <h3>{`Time taken : ${time}`}</h3>
      </div>
    </div>
  );
};

export default Destination;
