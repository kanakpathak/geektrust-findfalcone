/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const DestinationContext = React.createContext([{}]);

export const DestinationProvider = props => {
  const [destination, setDestination] = useState([{}]);
  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {props.children}
    </DestinationContext.Provider>
  );
};
