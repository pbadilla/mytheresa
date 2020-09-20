describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:9000");
    cy.url().should("include", "/");
  });
});
