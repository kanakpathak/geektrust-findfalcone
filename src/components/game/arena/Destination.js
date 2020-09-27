import React, { useContext } from "react";
import PropTypes from "prop-types";
import { VehiclesContext } from "../../../context/vehiclesContext";
import DropDown from "../../../utils/dropDown";
import RadioButton from "../../../utils/radioButton";
import { DropDownContext } from "../../../context/dropDownContext";

const Destination = ({ onSelected, des }) => {
  const { vehicles } = useContext(VehiclesContext);
  const { dropDown } = useContext(DropDownContext);

  console.log("vehicles", vehicles);
  return (
    <div>
      <DropDown options={dropDown} onSelected={onSelected} />
      {des.options !== -1 && <RadioButton data={vehicles} />}
    </div>
  );
};

Destination.propTypes = {
  onSelected: PropTypes.func.isRequired,
  des: PropTypes.objectOf(String).isRequired
};

export default Destination;
