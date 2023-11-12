/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("Registration test suite", () => {
    beforeEach(() => {
       cy.visit("https://qa-practice.netlify.app/register");
    });
  
    it("Register test", () => {
      cy.get("#firstName").type(faker.person.firstName(),{delay:0});
      cy.get("#emailAddress").type(faker.internet.email(),{delay:0});
      cy.get("#password").type(faker.internet.password(),{delay:0});
      cy.get('button').contains('Register').click();
      cy.contains('The account has been successfully created!').should('be visible');
    });

  });
