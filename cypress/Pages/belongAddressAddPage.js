class belongAddressAddPage {
  static findAddress(addressData) {
    cy.get(".styles__Wrapper-sc-1jig3zm-0").should("be.visible");
    cy.get(".styles__Wrapper-sc-1jig3zm-0").click();
    cy.waitforElement(2000);
    cy.screenshot("Internet Plans");
    cy.get('a[data-testid="global-header-button-nbn-plans"]').eq(0).click();
    cy.waitforElement(2000);
    cy.contains("Check your address").eq(0).click();
    //cy.screenshot("Check Address Page");
    cy.waitforElement(2000);
    cy.get('[data-testid="step-address-lookup__input"]').should("be.visible");
    cy.get('[data-testid="step-address-lookup__input"]').type(
      addressData + "{enter}",
      { delay: 500 }
    );
    cy.waitforElement(2000);
    cy.get("button[data-testid='step-address-lookup__submit-button']").click();
    cy.screenshot("Select Address");
    cy.get(".InnerSection-tykyg0-0 > .Heading-sc-1vh9mjn-0")
      .invoke("text")
      .then(($ele) => {
        cy.log($ele);
        expect($ele).to.equal("Great! We can connect you to NBN internet");
      });
    cy.waitforElement(2000);
    cy.screenshot("NBN Internet Validation");
  }
}

export default belongAddressAddPage;