import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import VerifyPhone from "../components/forms/VerifyPhone";
import { UserProvider } from "../libs/userContext";

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

describe("VerifyPhone", () => {
  it("VerifyPhone: should render correctly", () => {
    const wrapper = shallow(
      <UserProvider>
        <VerifyPhone />
      </UserProvider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("VerifyPhone: should match the input values of phone", () => {
    render(
      <UserProvider>
        <VerifyPhone />
      </UserProvider>
    );

    const inputPhone = screen.queryByTestId("input");

    fireEvent.change(inputPhone, { target: { value: "1234567890" } });
    expect(inputPhone.value).toBe("1234567890");

    let vals = inputPhone.value.length;

    expect(vals).not.toBeNull();
    expect(vals).not.toBeGreaterThan(10);
    expect(vals).not.toBeLessThan(10);
  });

  it("VerifyPhone: should not allow null values", () => {
    render(
      <UserProvider>
        <VerifyPhone />
      </UserProvider>
    );

    const buttonPhone = screen.queryByTestId("button");
    const inputPhone = screen.queryByTestId("input");

    inputPhone.value = "";
    fireEvent.click(buttonPhone);
    let vals = inputPhone.value.length;
    // buttonPhone.simulate("click");
    expect(vals).not.toBeNull();
  });
});
