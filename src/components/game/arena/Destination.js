import React, { useContext } from "react";
import PropTypes from "prop-types";
import { VehiclesContext } from "../../../context/vehiclesContext";
import DropDown from "../../../utils/dropDown";
import RadioButton from "../../../utils/radioButton";
import { DropDownContext } from "../../../context/dropDownContext";

const Destination = ({ onSelected }) => {
  const { vehicles } = useContext(VehiclesContext);
  const { dropDown } = useContext(DropDownContext);

  return (
    <div>
      <DropDown options={dropDown} onSelected={onSelected} />
      <RadioButton data={vehicles} />
    </div>
  );
};

Destination.propTypes = {
  // desArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  // desIndex: PropTypes.number.isRequired
  onSelected: PropTypes.func.isRequired
};

export default Destination;
