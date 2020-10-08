import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext";
import { GameProvider } from "./context/gameContext";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./router";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <ApiProvider>
        <GameProvider>
          <BrowserRouter>
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>
        </GameProvider>
      </ApiProvider>
    </div>
  );
};

export default App;
