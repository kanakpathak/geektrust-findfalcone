import React from "react";
import { shallow } from "enzyme";
import DisplayResult from "../src/components/result/DisplayResult";
import "../src/styles/result.css";

const props = {
  result: {
    status: true
  }
};
describe("Result", () => {
  it("should render my component", () => {
    const wrapper = shallow(<DisplayResult result={props.result} />);
  });
});
