import React, { useEffect, useContext, useState } from "react";
import DisplayResult from "./DisplayResult";
import { ApiContext } from "../../context/apiContext";
import { GameContext } from "../../context/gameContext";
import { postData } from "../../constants/config";
import { findingAPI } from "../../constants/api";

const Result = () => {
  const { planets, vehicles, token } = useContext(ApiContext);
  const { destination } = useContext(GameContext);
  const [result, setResult] = useState("");

  const findFalcone = async () => {
    const planetsNames = [];
    const vehiclesNames = [];

    destination.forEach(element => {
      planetsNames.push(planets[element.planetIndex].name);
      vehiclesNames.push(vehicles[element.vehicleIndex].name);
    });

    const data = {
      token,
      planet_names: planetsNames,
      vehicle_names: vehiclesNames
    };
    const response = await postData(findingAPI, data);
    setResult(response);
  };

  useEffect(() => {
    if (token !== "") findFalcone();
  }, [token]);
  return result !== "" && <DisplayResult result={result} />;
};

export default Result;
