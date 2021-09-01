import "@testing-library/cypress/add-commands";
describe("Testing Keyboard Events", () => {
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

    for (let i = 0; i < 5; i++) {
      if (i % 2 == 0)
        cy.get("body").trigger("keydown", { keyCode: 37, which: 37 });
      if (i % 2 !== 0)
        cy.get("body").trigger("keydown", { keyCode: 39, which: 39 });
      cy.wait(1000);
    }

    cy.get("#thank-you-message", { timeout: 250000 })
      .should("have.length", 1)
      .then(() => {
        cy.findByRole("button", { name: /logout/i }).click();
      });
  });
});
