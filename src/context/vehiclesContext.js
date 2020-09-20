/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { useState } from "react";

export const VehiclesContext = React.createContext([{}]);

export const VehiclesProvider = props => {
  const [vehicles, setVehicles] = useState([{}]);
  return (
    <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
      {props.children}
    </VehiclesContext.Provider>
  );
};
