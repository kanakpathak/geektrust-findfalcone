import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const DropDown = ({ data }) => {
  const optionArray = new Array(0);

  for (let i = 0; i < data.length; i += 1) {
    optionArray.push({
      value: data[i].name,
      label: data[i].name,
      isDisabled: false
    });
  }
  return (
    <div>
      <Select options={optionArray} onChange={event => console.log(event)} />
    </div>
  );
};

DropDown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DropDown;
