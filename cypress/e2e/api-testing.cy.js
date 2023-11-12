/// <reference types="cypress" />

const baseUrl = 'https://jsonplaceholder.typicode.com';

xdescribe("API test suite", () => {
  it("Get comments", () => {
    cy.request({
      method: "GET",
      url: baseUrl +"/comments",
    }).should((response) => {
      expect(response.status).to.eql(200);
      expect(response.body[0]).has.property("email", "Eliseo@gardner.biz");
    });
  });

  it("Post comments", () => {
    const requestBody = {
      title: "foo",
      body: "bar",
    };
    cy.request({
      method: "POST",
      url: baseUrl+"/posts",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    }).should((response) => {
      expect(response.status).to.eql(201);
    });
  });
});
