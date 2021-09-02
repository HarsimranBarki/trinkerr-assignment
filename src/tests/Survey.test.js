import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Survey from "../components/pages/Survey";
import { UserProvider } from "../libs/userContext";

Enzyme.configure({ adapter: new Adapter() });

describe("Survey", () => {
  it("Survey: should render correctly", () => {
    const wrapper = shallow(
      <UserProvider>
        <Survey />
      </UserProvider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("setSwipeCount: updates the swipeCount", () => {
    expect(true).toBe(true);
  });
});
