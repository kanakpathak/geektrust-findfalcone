import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./app.js", () => {
    document.removeChild(document.getElementById("root"));
    document.getElementById("root").appendChild(App);
  });
}
