import React, { useEffect, useContext, useState } from "react";
// import { PlanetsContext } from "../../context/planetsContext";
// import { VehiclesContext } from "../../context/vehiclesContext";
// import { DestinationContext } from "../../context/destinationContext";
import { ApiContext } from "../../context/apiContext";
import { GameContext } from "../../context/gameContext";
import { POST_DATA } from "../../constants/config";
import { findingAPI } from "../../constants/api";
// import { ResultContext } from "../../context/ResultContext";
import DisplayResult from "./DisplayResult";

const Result = () => {
  const { planets } = useContext(ApiContext);
  const { vehicles } = useContext(ApiContext);
  const { destination } = useContext(GameContext);
  const { token } = useContext(GameContext);
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
    const response = await POST_DATA(findingAPI, data);
    setResult(response);
  };

  useEffect(() => {
    if (token !== "") findFalcone();
  }, [token]);
  return result !== "" && <DisplayResult result={result} />;
};

export default Result;
