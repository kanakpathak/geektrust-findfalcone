import React from "react";
import { shallow } from "enzyme";
import DisplayVehicle from "../src/components/destination/DisplayVehicle";
import { GameProvider } from "../src/context/gameContext";

const props = {
  cardIndex: 0
};

describe("DisplayVehicle", () => {
  it("should render my component", () => {
    const wrapper = shallow(
      <GameProvider>
        <DisplayVehicle cardIndex={props.cardIndex} />
      </GameProvider>
    );
  });
});
