/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const DropDownContext = React.createContext([{}]);

export const DropDownProvider = props => {
  const [dropDown, setDropDown] = useState([{}]);
  return (
    <DropDownContext.Provider value={{ dropDown, setDropDown }}>
      {props.children}
    </DropDownContext.Provider>
  );
};
