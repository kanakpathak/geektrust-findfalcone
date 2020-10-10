import React from "react";
import { shallow } from "enzyme";
import DisplayPlanet from "../src/components/destination/DisplayPlanet";
import { GameProvider } from "../src/context/gameContext";

const props = {
  selectPlanet: () => {},
  planetCheckList: [],
  cardIndex: 0
};

describe("DisplayPlanet", () => {
  it("should render my component", () => {
    const wrapper = shallow(
      <GameProvider>
        <DisplayPlanet
          selectPlanet={props.selectPlanet}
          planetCheckList={props.planetCheckList}
          cardIndex={props.cardIndex}
        />
      </GameProvider>
    );
  });
});
