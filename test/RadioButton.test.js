import React from "react";
import { shallow } from "enzyme";
import RadioButton from "../src/utils/radioButton";

const props = {
  options: [],
  onSelected: () => {},
  desCard: {}
};

describe("RadioButton", () => {
  it("should render my component", () => {
    const wrapper = shallow(
      <RadioButton
        options={props.options}
        onSelected={props.onSelected}
        desCard={props.desCard}
      />
    );
  });
});
