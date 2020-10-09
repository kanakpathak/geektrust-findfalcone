/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Destination from "../destination";
import { ApiContext } from "../../context/apiContext";
import { fetchAccessToken, getData } from "../../constants/config";
import { planetsAPI, vehiclesAPI } from "../../constants/api";
import "../../styles/home.css";

const Home = () => {
  const [isEnable, setIsEnable] = useState(false);
  const { setToken, setPlanets, setVehicles } = useContext(ApiContext);
  const history = useHistory();

  const getAccessToken = async () => {
    const result = await fetchAccessToken();
    if (!result.error) setToken(result.token);
  };

  const getPlanetsData = async () => {
    const result = await getData(planetsAPI);
    setPlanets(result);
  };

  const getVehiclesData = async () => {
    const result = await getData(vehiclesAPI);
    setVehicles(result);
  };

  useEffect(() => {
    getAccessToken();
    getPlanetsData();
    getVehiclesData();
  }, []);

  return (
    <div className="homeContainer">
      <div>
        <h3>Select planets you want to search in:</h3>
      </div>
      <Destination enableButton={isEnable} setEnableButton={setIsEnable} />
      <div
        className={`button ${isEnable ? "enableButton" : "disabledButton"}`}
        onClick={() => {
          isEnable && history.push("/result");
        }}
      >
        Find Falcone!
      </div>
    </div>
  );
};

export default Home;
