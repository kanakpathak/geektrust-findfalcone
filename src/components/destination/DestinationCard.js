import React, { useContext } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import RadioButton from "../../utils/radioButton";
import { GameContext } from "../../context/gameContext";
import { ApiContext } from "../../context/apiContext";

const DestinationCard = props => {
  const { options, selectPlanet, planetCheckList, cardIndex } = props;

  const { planets, vehicles, setVehicles } = useContext(ApiContext);
  const { destination, setDestination } = useContext(GameContext);
  const { time, setTime } = useContext(GameContext);

  const { planetIndex, vehicleIndex } = destination[cardIndex];
  const des = JSON.parse(JSON.stringify(destination));

  const onPlanetSelected = event => {
    if (vehicleIndex !== -1) {
      const vehicleObj = vehicles[vehicleIndex];
      const computeTime = planets[planetIndex].distance / vehicleObj.speed;
      vehicleObj.total_no += 1;
      des[cardIndex].vehicleIndex = -1;
      setTime(time - computeTime);
      setVehicles([...vehicles]);
    }

    if (planetIndex !== -1) planetCheckList[planetIndex] = false;

    des[cardIndex].planetIndex = event.index;
    planetCheckList[event.index] = true;

    selectPlanet([...planetCheckList]);
    setDestination([...des]);
  };

  const onVehicleSelected = index => {
    const obj = vehicles[index];

    let computeTime = 0;
    if (vehicleIndex !== -1) {
      const vehicleObj = vehicles[vehicleIndex];
      vehicleObj.total_no += 1;
      computeTime -= planets[planetIndex].distance / vehicleObj.speed;
    }

    des[cardIndex].vehicleIndex = index;
    computeTime += planets[planetIndex].distance / obj.speed;
    obj.total_no -= 1;

    setVehicles([...vehicles]);
    setDestination([...des]);
    setTime(time + computeTime);
  };

  return (
    <div>
      <Select options={options} onChange={onPlanetSelected} />
      {planetIndex !== -1 && (
        <RadioButton
          options={vehicles}
          onSelected={onVehicleSelected}
          desCard={destination[cardIndex]}
        />
      )}
    </div>
  );
};

DestinationCard.propTypes = {
  options: PropTypes.arrayOf(Object).isRequired,
  selectPlanet: PropTypes.func.isRequired,
  planetCheckList: PropTypes.arrayOf(Number).isRequired,
  cardIndex: PropTypes.number.isRequired
};

export default DestinationCard;
