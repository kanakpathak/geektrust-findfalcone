import React from "react";
import { shallow } from "enzyme";
import Home from "../src/components/home";
import "../src/styles/home.css";

describe("Home", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Home />);
  });
});
