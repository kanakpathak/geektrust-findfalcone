import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../../context/gameContext";
import { ApiContext } from "../../context/apiContext";
import RadioButton from "../../utils/radioButton";

const DisplayVehicle = ({ cardIndex }) => {
  const { planets, vehicles, setVehicles } = useContext(ApiContext);
  const { destination, setDestination } = useContext(GameContext);
  const { time, setTime } = useContext(GameContext);

  const { planetIndex, vehicleIndex } = destination[cardIndex];
  const des = JSON.parse(JSON.stringify(destination));
  
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

  if(destination[cardIndex].planetIndex === -1) return null;

  return (
    <RadioButton
      options={vehicles}
      onSelected={onVehicleSelected}
      desCard={destination[cardIndex]}
    />
  );
};

DisplayVehicle.propTypes = {
  cardIndex: PropTypes.number.isRequired
};

export default DisplayVehicle;
