/// <reference types="Cypress" />
import belongAddressAddPage from ".././Pages/belongAddressAddPage";
before(() => {
  cy.visit("/");
  cy.url().should("include", "belong");
  cy.screenshot("Homepage");
});
describe("Belong  Page Object spec", () => {
  it("Belong Address Search-POM", () => {
    cy.fixture("TestData").then((data) => {
      let addressData = data.address;
      belongAddressAddPage.findAddress(addressData);
    });
  });
});
