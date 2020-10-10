import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext";
import { GameProvider } from "./context/gameContext";
import Header from "./utils/header";
import Footer from "./utils/footer";
import RouteApp from "./router";
import "./styles/app.css";

const App = () => {
  /* Router represents routed components */
  return (
    <div className="app">
      <ApiProvider>
        <GameProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <RouteApp />
            <Footer />
          </BrowserRouter>
        </GameProvider>
      </ApiProvider>
    </div>
  );
};

export default App;
