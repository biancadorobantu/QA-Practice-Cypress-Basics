/// <reference types="cypress" />

describe("xPath Authentication test suite", () => {
    beforeEach(() => {
      cy.visit("https://qa-practice.netlify.app");
    });
  
    it("xpath Login test", () => {
      cy.get("a").contains("Form").click();
      cy.get("#login").click();
      cy.xpath('//input[@id="email"]').type("admin@admin.com", {delay:0});
      cy.get("#password").type("admin123",{delay:0});
      cy.get("button").contains("Submit").click();
      cy.get("#logout").should("be.visible");
    });
  });
  