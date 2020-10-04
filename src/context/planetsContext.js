/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const PlanetsContext = React.createContext([]);

export const PlanetsProvider = props => {
  const [planets, setPlanets] = useState([]);
  return (
    <PlanetsContext.Provider value={{ planets, setPlanets }}>
      {props.children}
    </PlanetsContext.Provider>
  );
};
