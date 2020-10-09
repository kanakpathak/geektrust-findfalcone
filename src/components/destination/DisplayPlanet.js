import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { GameContext } from "../../context/gameContext";
import { ApiContext } from "../../context/apiContext";

const DisplayPlanet = ({ selectPlanet, planetCheckList, cardIndex }) => {
  const { planets, vehicles, setVehicles } = useContext(ApiContext);
  const { destination, setDestination } = useContext(GameContext);
  const { time, setTime } = useContext(GameContext);

  const [options, setOptions] = useState([]);

  const { planetIndex, vehicleIndex } = destination[cardIndex];
  const des = JSON.parse(JSON.stringify(destination));

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
      return null;
    });
    setOptions([...arr]);
  };

  useEffect(() => {
    setDropDownOptions();
  }, [planetCheckList]);

  const onPlanetSelected = event => {
    if (vehicleIndex !== -1) {
      const vehicleObj = vehicles[vehicleIndex];
      const computeTime = planets[planetIndex].distance / vehicleObj.speed;
      vehicleObj.total_no += 1;
      des[cardIndex].vehicleIndex = -1;
      setTime(time - computeTime);
      setVehicles([...vehicles]);
    }
    const list = planetCheckList;
    if (planetIndex !== -1) list[planetIndex] = false;

    des[cardIndex].planetIndex = event.index;
    list[event.index] = true;

    selectPlanet([...list]);
    setDestination([...des]);
  };

  return <Select options={options} onChange={onPlanetSelected} />;
};

DisplayPlanet.propTypes = {
  selectPlanet: PropTypes.func.isRequired,
  planetCheckList: PropTypes.arrayOf(Number).isRequired,
  cardIndex: PropTypes.number.isRequired
};

export default DisplayPlanet;
