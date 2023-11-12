/// <reference types="cypress" />


describe("Authentication test suite", () => {
  beforeEach(() => {
    // cy.visit("https://qa-practice.netlify.app");
    //cy.get("a").contains("Form").click();
    //cy.get("#login").click();
    //cy.get("#email").type("admin@admin.com", {delay:0});
    //cy.get("#password").type("admin123",{delay:0});
    // cy.get("button").contains("Submit").click();
    cy.login('admin@admin.com','admin123');
  });

  it("Login test", () => {
    cy.get("#logout").should("be.visible");
  });

  it("Logout test", () => {
    cy.get("#logout").click();
    cy.get("h2").contains("Login - Shop").should("be.visible");
  });
});
