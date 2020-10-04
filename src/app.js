import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
// import Home from "./components/home";
// import Result from "./components/game/result";
import { FETCH_ACCESS_TOKEN } from "./constants/config";
// import { PlanetsProvider } from "./context/planetsContext";
// import { VehiclesProvider } from "./context/vehiclesContext";
import "./styles/app.css";
// import { DestinationProvider } from "./context/destinationContext";
import Router from "./router";

const App = () => {
  const [token, setToken] = useState("");

  const getAccessToken = async () => {
    const result = await FETCH_ACCESS_TOKEN();
    setToken(result.token);
  };

  useEffect(() => {
    getAccessToken();
  }, [token]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

//  <PlanetsProvider>
//   <VehiclesProvider>
//     <DestinationProvider>
//       <div className="component">
//         <Route exact path="/" component={Home} />
//         <Route path="/result" component={Result} />
//       </div>
//     </DestinationProvider>
//   </VehiclesProvider>
// </PlanetsProvider>
