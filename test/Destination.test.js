import React from "react";
import { shallow } from "enzyme";
import Destination from "../src/components/destination";
import { GameProvider } from "../src/context/gameContext";
import "../src/styles/destination.css";

describe("Destination", () => {
  it("should render my component", () => {
    const wrapper = shallow(
      <GameProvider>
        <Destination />
      </GameProvider>
    );
  });
});
