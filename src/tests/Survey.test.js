import { cleanup, render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Survey from "../components/pages/Survey";
import { UserContext, UserProvider } from "../libs/userContext";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("Survey", () => {
  it("Survey: should render correctly", () => {
    const wrapper = shallow(
      <UserProvider>
        <Survey />
      </UserProvider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("setSwipeCount: totalSwiped is set to 0 render Image", () => {
    const setUser = jest.fn();
    const user = { name: "Robin", phone: "1298787867", totalSwiped: 0 };
    render(
      <UserContext.Provider value={{ user, setUser }}>
        <Survey />
      </UserContext.Provider>
    );

    expect(screen.getByTestId("cardImage")).toMatchSnapshot();
  });

  it("setSwipeCount: totalSwiped is set to 5 don't render Image", () => {
    const setUser = jest.fn();
    const user = { name: "Robin", phone: "1298787867", totalSwiped: 5 };
    render(
      <UserContext.Provider value={{ user, setUser }}>
        <Survey />
      </UserContext.Provider>
    );

    expect(screen.getByTestId("thank-you-message")).toMatchSnapshot();
  });

  it("refresh: state is preserved with correct Image", () => {
    const setUser = jest.fn();
    const user = { name: "Robin", phone: "1298787867", totalSwiped: 3 };
    localStorage.setItem("user", JSON.stringify(user));

    render(
      <UserContext.Provider value={{ user, setUser }}>
        <Survey />
      </UserContext.Provider>
    );

    expect(screen.getByTestId("cardImage").id).toBe("4");
  });
});
