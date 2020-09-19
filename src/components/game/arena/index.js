import React, { useState, useEffect } from "react";
import DisplayArena from "./DisplayArena";
import { planetsAPI, vehiclesAPI } from "../../../constants/api";
import { GET_DATA } from "../../../constants/config";
import "../../../styles/arena.css";

const Arena = () => {
  const [planets, setPlanets] = useState([{}]);
  const [vehicles, setVehicles] = useState([{}]);

  const getPlanetsData = async () => {
    const result = await GET_DATA(planetsAPI);
    setPlanets(JSON.parse(result));
    console.log("Planets data", result);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const getVehiclesData = async () => {
    const result = await GET_DATA(vehiclesAPI);
    setVehicles(JSON.parse(result));
    console.log("Vehicles data", result);
  };

  useEffect(() => {
    getVehiclesData();
  }, []);

  return <DisplayArena planets={planets} vehicles={vehicles} />;
};

export default Arena;
