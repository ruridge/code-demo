describe("smoke for people use cases", () => {
  before(() => {
    cy.exec("npm run seed-db");
  });
  it("should allow the typical flow of searching by name and filtering by employment type", () => {
    cy.visit("/people");

    cy.findByRole("main").within(() => {
      // Display a table with a list of people and their attributes
      cy.findAllByRole("cell").should("have.length.above", 1);

      // Searching by name
      cy.findByRole("textbox", { name: /search/i }).type("ann h");
      cy.findAllByRole("row").should("have.length", 2); // heading and ann
      cy.findByRole("cell", { name: /ann henry/i }).should("exist");
      // enpty text imput
      cy.findByRole("textbox", { name: /search/i }).type("{selectall}{del}");

      // Filtering by employment type
      // filter for contractors
      cy.findByRole("button", { name: /contractor/i }).click();
      cy.findAllByRole("cell", { name: /contractor/i }).should(
        "have.lengthOf",
        2
      );
      cy.findAllByRole("cell", { name: /employee/i }).should(
        "have.lengthOf",
        0
      );
      cy.findByRole("button", { name: /contractor/i }).click(); // reset contractor button

      // filter for employees
      cy.findByRole("button", { name: /employee/i }).click();
      cy.findAllByRole("cell", { name: /employee/i }).should(
        "have.lengthOf",
        5
      );
      cy.findAllByRole("cell", { name: /contractor/i }).should(
        "have.lengthOf",
        0
      );
    });
  });

  it("should allow navigation from the people list to pages for creating and editing people", () => {
    cy.visit("/people");
    // Links to the pages to add or edit a team member
    cy.findByRole("main").within(() => {
      cy.findByRole("link", { name: /add member/i }).click();
    });
    cy.url().should("contain", "/people/new");

    cy.visit("/people");
    cy.findByRole("main").within(() => {
      cy.findAllByRole("link", { name: /edit/i }).first().click();
    });
    cy.url().should("match", /\/people\/edit\/\d+$/);
  });
});
