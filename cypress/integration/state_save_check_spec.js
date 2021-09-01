import "@testing-library/cypress/add-commands";
describe("Checking Preserved State", () => {
  it("Add Phone Number", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox").type("8971613155");
    cy.findByRole("button", { name: /get otp/i }).click();
  });

  it("Submit OTP", () => {
    cy.findByRole("textbox").type("0000");
    cy.findByRole("button", { name: /submit otp/i }).click();
  });

  it("State Reload Check", () => {
    cy.findByRole("textbox").type("Harsimran");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.wait(1000);

    cy.get("body").trigger("keydown", { keyCode: 37, which: 37 });
    cy.wait(1000);
    cy.get("body").trigger("keydown", { keyCode: 37, which: 37 });
    cy.wait(1000);
    cy.reload();
  });
});
