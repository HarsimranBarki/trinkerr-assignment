import { fireEvent, render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { createMemoryHistory } from "history";
import React from "react";
import VerifyName from "../components/forms/VerifyName";
import { UserProvider } from "../libs/userContext";

Enzyme.configure({ adapter: new Adapter() });

describe("VerifyName", () => {
  const setSignupState = jest.fn();
  const history = createMemoryHistory();
  it("VerifyName: should render correctly", () => {
    const wrapper = shallow(
      <UserProvider>
        <VerifyName setSignupState={setSignupState} history={history} />
      </UserProvider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("VerifyName: should have correct props ( :name )", () => {
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

  it("VerifyName: should not allow null values", () => {
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
