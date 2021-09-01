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
