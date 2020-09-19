import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Arena from "./components/game/arena";
import Result from "./components/game/result";
import { FETCH_ACCESS_TOKEN } from "./constants/config";
import "./styles/app.css";

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
      <Router>
        <div>
          <Header />
        </div>
        <div className="component">
          <Route exact path="/" component={Arena} />
          <Route path="/result" component={Result} />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
