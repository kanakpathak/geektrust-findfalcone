/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const GameContext = React.createContext([]);

export const GameProvider = props => {
  const [destination, setDestination] = useState([]);
  const [time, setTime] = useState(0);

  return (
    <GameContext.Provider value={{ destination, setDestination, time, setTime }}>
      {props.children}
    </GameContext.Provider>
  );
};
