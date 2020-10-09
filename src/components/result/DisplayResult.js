/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { GameContext } from "../../context/gameContext";
import "../../styles/result.css";

const SuccessMessage = ({ time, planet }) => {
  return (
    <div>
      <h1>
        Success! Congratulations on Finding Falcone. King Shah is mighty
        pleased.
      </h1>
      <h2>{`Time Taken: ${time}`}</h2>
      <h2>{`Planet Found: ${planet}`}</h2>
    </div>
  );
};

const FailureMessage = () => {
  return (
    <div>
      <h1>Failed ! Be ready to face the wrath of King Shah mighty</h1>
    </div>
  );
};

const ErrorMessage = ({ error }) => {
  return (
    <div>
      <h2>Snap ! :( </h2>
      <h4>{error}</h4>
    </div>
  );
};

const DisplayResult = ({ result }) => {
  const { time } = useContext(GameContext);
  const history = useHistory();
  return (
    <div className="result">
      {result.status === "error" && <ErrorMessage error={result.error} />}
      {result.status === "false" && <FailureMessage />}
      {result.status === "success" && (
        <SuccessMessage time={time} planet={result.planet_name} />
      )}

      <div className="startButton" onClick={() => history.push("/")}>
        Start Again!
      </div>
    </div>
  );
};

SuccessMessage.propTypes = {
  time: PropTypes.number.isRequired,
  planet: PropTypes.string.isRequired
};

DisplayResult.propTypes = {
  result: PropTypes.objectOf(String).isRequired
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default DisplayResult;
