import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
// import { PlanetsProvider } from "./context/planetsContext";
// import { VehiclesProvider } from "./context/vehiclesContext";
import "./styles/app.css";
// import { DestinationProvider } from "./context/destinationContext";
// import { ResultProvider } from "./context/ResultContext";
import { ApiProvider } from "./context/apiContext";
import { GameProvider } from "./context/gameContext";
import Router from "./router";

const App = () => {
  return (
    <div className="app">
      {/* <PlanetsProvider>
        <VehiclesProvider>
          <DestinationProvider>
            <ResultProvider> */}
      <ApiProvider>
        <GameProvider>
          <BrowserRouter>
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>
        </GameProvider>
      </ApiProvider>
      {/* </ResultProvider>
          </DestinationProvider>
        </VehiclesProvider>
      </PlanetsProvider> */}
    </div>
  );
};

export default App;
