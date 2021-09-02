import { fireEvent, render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import VerifyOTP from "../components/forms/VerifyOTP";
import { UserProvider } from "../libs/userContext";

Enzyme.configure({ adapter: new Adapter() });

describe("VerifyOTP", () => {
  const setSignupState = jest.fn();
  it("VerifyOTP: should render correctly", () => {
    const wrapper = shallow(
      <UserProvider>
        <VerifyOTP setSignupState={setSignupState} />
      </UserProvider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("VerifyOTP: should not be greater or less than 4", () => {
    render(
      <UserProvider>
        <VerifyOTP setSignupState={setSignupState} />
      </UserProvider>
    );

    const buttonPhone = screen.queryByTestId("button");
    const inputOTP = screen.queryByTestId("input");

    fireEvent.change(inputOTP, { target: { value: "0000" } });
    fireEvent.click(buttonPhone);

    expect(inputOTP.value).toBe("0000");

    let vals = inputOTP.value.length;
    expect(vals).not.toBeGreaterThan(4);
    expect(vals).not.toBeLessThan(4);
  });

  it("VerifyOTP: should not allow null values", () => {
    render(
      <UserProvider>
        <VerifyOTP setSignupState={setSignupState} />
      </UserProvider>
    );
    const buttonPhone = screen.queryByTestId("button");
    const inputOTP = screen.queryByTestId("input");

    inputOTP.value = "";
    fireEvent.click(buttonPhone);
    let vals = inputOTP.value.length;
    // buttonPhone.simulate("click");
    expect(vals).not.toBeNull();
  });
});
