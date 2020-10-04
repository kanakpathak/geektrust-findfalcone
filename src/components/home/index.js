import React from "react";
import { Link } from "react-router-dom";
import { PlanetsProvider } from "../../context/planetsContext";
import { VehiclesProvider } from "../../context/vehiclesContext";
import { DestinationProvider } from "../../context/destinationContext";
import Destination from "../destination";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div>
        <h3>Select planets you want to search in:</h3>
      </div>
      <PlanetsProvider>
        <VehiclesProvider>
          <DestinationProvider>
            <Destination />
          </DestinationProvider>
        </VehiclesProvider>
      </PlanetsProvider>
      <Link className="button" to="/result">
        <div>Find Falcone!</div>
      </Link>
    </div>
  );
};

export default Home;

// import DisplayHome from "../destination";
// import { planetsAPI, vehiclesAPI } from "../../constants/api";
// import { GET_DATA } from "../../constants/config";

// const { setPlanets } = useContext(PlanetsContext);
// const { setVehicles } = useContext(VehiclesContext);

// const getPlanetsData = async () => {
//   const result = await GET_DATA(planetsAPI);
//   setPlanets(JSON.parse(result));
// };

// const getVehiclesData = async () => {
//   const result = await GET_DATA(vehiclesAPI);
//   setVehicles(JSON.parse(result));
// };

// useEffect(() => {
//   getPlanetsData();
//   getVehiclesData();
// }, []);
