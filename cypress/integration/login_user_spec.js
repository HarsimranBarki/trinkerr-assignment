import "@testing-library/cypress/add-commands";
describe("Login & Logout", () => {
  it("Add Phone Number", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox").type("8971613155");
    cy.findByRole("button", { name: /get otp/i }).click();
  });

  it("Submit OTP", () => {
    cy.findByRole("textbox").type("0000");
    cy.findByRole("button", { name: /submit otp/i }).click();
  });

  it("Submit Name & Logout", () => {
    cy.findByRole("textbox").type("Harsimran");
    cy.findByRole("button", { name: /submit/i }).click();
    cy.saveLocalStorage();
    cy.get("#thank-you-message", { timeout: 250000 })
      .should("have.length", 1)
      .then(() => {
        cy.findByRole("button", { name: /logout/i }).click();
      });
  });

  it("Add Phone Number", () => {
    cy.restoreLocalStorage();
    cy.findByRole("textbox").type("8971613155");
    cy.findByRole("button", { name: /get otp/i }).click();
  });

  it("Submit OTP", () => {
    cy.restoreLocalStorage();
    cy.findByRole("textbox").type("0000");
    cy.findByRole("button", { name: /submit otp/i }).click();
  });
  it("Logout", () => {
    cy.restoreLocalStorage();
    cy.findByRole("button", { name: /logout/i }).click();
  });
});
