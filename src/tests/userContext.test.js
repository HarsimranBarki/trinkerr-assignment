import React from "react";
import { UserContext, UserProvider } from "../libs/userContext";

import { mount } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("login", () => {
  it("user Context is being set correctly", () => {
    const TestComponent = () => {
      const { user, setUser } = React.useContext(UserContext);
      return (
        <>
          <div data-testid="value">{user?.name.toString()}</div>
          <button
            onClick={() => setUser({ name: "harsimran", phone: "8971613155" })}
          >
            Login
          </button>
        </>
      );
    };
    const wrapper = mount(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    wrapper.find("button").simulate("click");
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("harsimran");
  });
});
