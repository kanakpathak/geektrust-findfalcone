import React, { useContext } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import RadioButton from "../../utils/radioButton";
import { VehiclesContext } from "../../context/vehiclesContext";
import { DestinationContext } from "../../context/destinationContext";
import { PlanetsContext } from "../../context/planetsContext";

const DestinationCard = props => {
  const {
    options,
    selectPlanet,
    planetCheckList,
    cardIndex,
    calculateTime
  } = props;

  const { vehicles, setVehicles } = useContext(VehiclesContext);
  const { planets } = useContext(PlanetsContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const { planetIndex, vehicleIndex } = destination[cardIndex];
  const des = JSON.parse(JSON.stringify(destination));

  const onPlanetSelected = event => {
    if (vehicleIndex !== -1) {
      const vehicleObj = vehicles[vehicleIndex];
      const computeTime =
        -1 * (planets[planetIndex].distance / vehicleObj.speed);
      vehicleObj.total_no += 1;
      des[cardIndex].vehicleIndex = -1;
      calculateTime(computeTime);
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
    calculateTime(computeTime);
  };

  return (
    <div>
      <Select options={options} onChange={onPlanetSelected} />
      {planets.length && planetIndex !== -1 && (
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
  cardIndex: PropTypes.number.isRequired,
  calculateTime: PropTypes.func.isRequired
};

export default DestinationCard;
