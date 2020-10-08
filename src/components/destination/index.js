/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import DestinationCard from "./DestinationCard";
// import { PlanetsContext } from "../../context/planetsContext";
// import { VehiclesContext } from "../../context/vehiclesContext";
// import { DestinationContext } from "../../context/destinationContext";
import { GameContext } from "../../context/gameContext";
import { ApiContext } from "../../context/apiContext";
import { FETCH_DATA } from "../../constants/config";
import { planetsAPI, vehiclesAPI } from "../../constants/api";
import "../../styles/destination.css";
// import { ResultContext } from "../../context/ResultContext";



const Destination = ({ enableButton, setEnableButton }) => {
  const [planetCheckList, setPlanetCheckList] = useState([]);
  const [options, setOptions] = useState([]);
  const { time, setTime } = useContext(GameContext);

  const { planets, setPlanets } = useContext(ApiContext);
  const { setVehicles } = useContext(ApiContext);
  const { destination, setDestination } = useContext(GameContext);

  const getPlanetsData = async () => {
    const result = await FETCH_DATA(planetsAPI);
    setPlanets(JSON.parse(result));
  };

  const getVehiclesData = async () => {
    const result = await FETCH_DATA(vehiclesAPI);
    setVehicles(JSON.parse(result));
  };

  useEffect(() => {
    getPlanetsData();
    getVehiclesData();
    setTime(0);
  }, []);

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

  const setDropDownOptions = () => {
    const arr = [];
    planets.map((planet, index) => {
      if (!planetCheckList[index]) {
        return arr.push({
          value: planet.name,
          label: planet.name,
          index
        });
      }
    });
    setOptions([...arr]);
  };

  useEffect(() => {
    setDropDownOptions();
  }, [planetCheckList]);

  const calculateTime = calculatedTime => {
    setTime(time + calculatedTime);
  };

  useEffect(() => {
    let isEnabled = true;

    destination.map(item => {
      if (item.vehicleIndex < 0) isEnabled = false;
    });
    if (enableButton !== isEnabled) setEnableButton(!enableButton);
  }, [destination]);

  return (
    <div className="container">
      <div className="destination">
        {destination.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className="destinationCard" key={index}>
              <p>{`Destination ${index + 1}`}</p>
              <DestinationCard
                options={options}
                selectPlanet={() => setPlanetCheckList([...planetCheckList])}
                planetCheckList={planetCheckList}
                cardIndex={index}
                calculateTime={calculateTime}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h3>{`Time taken : ${time}`}</h3>
      </div>
    </div>
  );
};

export default Destination;

Destination.propTypes = {
  enableButton: PropTypes.bool.isRequired,
  setEnableButton: PropTypes.func.isRequired
};
