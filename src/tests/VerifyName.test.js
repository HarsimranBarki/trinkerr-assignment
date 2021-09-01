import React, { useContext } from "react";
import { mount } from "enzyme";
import VerifyName from "../components/forms/VerifyName";
import { createMemoryHistory } from "history";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserProvider } from "../libs/userContext";
import { render, screen, fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

it("test phone", () => {
  const TestComponent = () => {
    return <VerifyName />;
  };
  const wrapper = mount(
    <UserProvider>
      <TestComponent />
    </UserProvider>
  );

  expect(wrapper.find("button")).toBeTruthy();
  expect(wrapper.find("input")).toBeTruthy();
});

describe("test name input", () => {
  const setSignupState = jest.fn();
  const history = createMemoryHistory();
  it("Updates on change", () => {
    render(
      <UserProvider>
        <VerifyName setSignupState={setSignupState} history={history} />
      </UserProvider>
    );

    const buttonPhone = screen.queryByTestId("button");
    const inputName = screen.queryByTestId("input");

    fireEvent.change(inputName, { target: { value: "James" } });
    fireEvent.click(buttonPhone);
    expect(inputName.value).toBe("James");
    let vals = inputName.value.length;
    expect(vals).not.toBeNull();
  });
});

describe("test phone input empty value", () => {
  const setSignupState = jest.fn();
  localStorage.setItem("userCollections", []);
  const history = createMemoryHistory();
  it("Updates on change", () => {
    render(
      <UserProvider>
        <VerifyName setSignupState={setSignupState} history={history} />
      </UserProvider>
    );

    const buttonPhone = screen.queryByTestId("button");
    const inputName = screen.queryByTestId("input");

    inputName.value = "";
    fireEvent.click(buttonPhone);
    let vals = inputName.value.length;

    expect(vals).not.toBeNull();
  });
});
