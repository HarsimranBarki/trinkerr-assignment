import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import VerifyPhone from "../components/forms/VerifyPhone";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserProvider } from "../libs/userContext";
import { render, screen, fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe("VerifyPhone", () => {});
it("VerifyPhone: should render correctly", () => {
  const tree = renderer
    .create(
      mount(
        <UserProvider>
          <VerifyPhone />
        </UserProvider>
      )
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

// describe("test phone input", () => {
//   it("Updates on change", () => {
//     render(
//       <UserProvider>
//         <VerifyPhone />
//       </UserProvider>
//     );

//     const buttonPhone = screen.queryByTestId("button");
//     const inputPhone = screen.queryByTestId("input");

//     fireEvent.change(inputPhone, { target: { value: "1234567890" } });
//     // buttonPhone.simulate("click");
//     expect(inputPhone.value).toBe("1234567890");
//     let vals = inputPhone.value.length;
//     expect(vals).not.toBeNull();
//     expect(vals).not.toBeGreaterThan(10);
//     expect(vals).not.toBeLessThan(10);
//   });
// });

// describe("test phone input empty value", () => {
//   it("Updates on change", () => {
//     render(
//       <UserProvider>
//         <VerifyPhone />
//       </UserProvider>
//     );

//     const buttonPhone = screen.queryByTestId("button");
//     const inputPhone = screen.queryByTestId("input");

//     inputPhone.value = "";
//     fireEvent.click(buttonPhone);
//     let vals = inputPhone.value.length;
//     // buttonPhone.simulate("click");
//     expect(vals).not.toBeNull();
//   });
// });
