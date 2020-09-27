import React, { useState } from "react";
import PropTypes from "prop-types";

const RadioButton = ({ data }) => {
  const [selected, setSelected] = useState("");

  const onValueChange = index => {
    console.log("data.index.total_no", data[index].total_no);
    console.log("event occuring", event.target);
    setSelected(event.target.value);
  };
  return (
    <div>
      {data.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={item + index} style={{ display: "flex", padding: "2px" }}>
            <div>
              <input
                type="radio"
                value={item.name}
                checked={selected === item.name}
                onChange={() => onValueChange(index)}
              />
            </div>
            <div>
              {item.name}
              {" ("}
              {item.total_no}
              {") "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

RadioButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default RadioButton;
