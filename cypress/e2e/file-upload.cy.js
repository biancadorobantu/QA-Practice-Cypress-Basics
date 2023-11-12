/// <reference types="cypress" />

describe('File uploat test suite', ()=>{
    it('file upload test', ()=>{
        const fileName = 'fis.txt';
        cy.visit('https://qa-practice.netlify.app');
        cy.get('a').contains('File Upload').click();
        cy.get('#file_upload').selectFile('cypress/fixtures/'+fileName);
        cy.get('button').contains('Submit').click();
        cy.contains(`You have successfully uploaded "${fileName}"`).should('be.visible');
    });
});