import React from "react";
import { shallow } from "enzyme";
import Result from "../src/components/result";
import "../src/styles/result.css";

describe("Result", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Result />);
  });
});
