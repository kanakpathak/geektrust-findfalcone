import React, { useEffect, useContext } from "react";
import DisplayArena from "./DisplayArena";
import { planetsAPI, vehiclesAPI } from "../../../constants/api";
import { GET_DATA } from "../../../constants/config";
import "../../../styles/arena.css";
import { PlanetsContext } from "../../../context/planetsContext";
import { VehiclesContext } from "../../../context/vehiclesContext";
import { DropDownProvider } from "../../../context/dropDownContext";

const Arena = () => {
  const { setPlanets } = useContext(PlanetsContext);
  const { setVehicles } = useContext(VehiclesContext);

  const getPlanetsData = async () => {
    const result = await GET_DATA(planetsAPI);
    setPlanets(JSON.parse(result));
    // console.log("Planets data", result);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const getVehiclesData = async () => {
    const result = await GET_DATA(vehiclesAPI);
    setVehicles(JSON.parse(result));
    // console.log("Vehicles data", result);
  };

  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <DropDownProvider>
      <DisplayArena />
    </DropDownProvider>
  );
};

export default Arena;
