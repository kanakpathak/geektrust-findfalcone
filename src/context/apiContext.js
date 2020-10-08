/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const ApiContext = React.createContext([]);

export const ApiProvider = props => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState([]);

  return (
    <ApiContext.Provider
      value={{ planets, setPlanets, vehicles, setVehicles, token, setToken }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

