/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export const ResultContext = React.createContext("");

export const ResultProvider = props => {
  const [token, setToken] = useState("");
  const [time, setTime] = useState(0);
  return (
    <ResultContext.Provider value={{ token, setToken, time, setTime }}>
      {props.children}
    </ResultContext.Provider>
  );
};
