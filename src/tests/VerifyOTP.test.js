import React, { useContext } from "react";
import { mount } from "enzyme";
import VerifyOTP from "../components/forms/VerifyOTP";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserProvider } from "../libs/userContext";
import { render, screen, fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

it("test phone", () => {
  const TestComponent = () => {
    return <VerifyOTP />;
  };
  const wrapper = mount(
    <UserProvider>
      <TestComponent />
    </UserProvider>
  );

  expect(wrapper.find("button")).toBeTruthy();
  expect(wrapper.find("input")).toBeTruthy();
});

describe("test phone input", () => {
  const setSignupState = jest.fn();
  it("Updates on change", () => {
    render(
      <UserProvider>
        <VerifyOTP setSignupState={setSignupState} />
      </UserProvider>
    );

    const buttonPhone = screen.queryByTestId("button");
    const inputOTP = screen.queryByTestId("input");

    fireEvent.change(inputOTP, { target: { value: "0000" } });
    fireEvent.click(buttonPhone);
    // buttonPhone.simulate("click");
    expect(inputOTP.value).toBe("0000");
    let vals = inputOTP.value.length;
    expect(vals).not.toBeNull();
    expect(vals).not.toBeGreaterThan(4);
    expect(vals).not.toBeLessThan(4);
  });
});

describe("test phone input empty value", () => {
  const setSignupState = jest.fn();
  it("Updates on change", () => {
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
