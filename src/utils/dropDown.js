import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const DropDown = ({ options, onSelected }) => {
  return (
    <div>
      <Select options={options} onChange={event => onSelected(event)} />
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelected: PropTypes.func.isRequired
};

export default DropDown;
