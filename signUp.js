class SignupPage {
  visit() {
    cy.visit("/signup");  // Change URL if needed
  }

  clickOnCreate(){
    cy.contains('a', 'Create an Account').click();
  }

  enterFirstName(name) {
    cy.get("#firstname").type(name);
  }

  enterLastName(name) {
    cy.get("#lastname").type(name);
  }

  enterEmail(email) {
    cy.get("#email_address").type(email);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  enterConfirmPassword(password) {
    cy.get('#password-confirmation', { timeout: 10000 }) // Wait up to 10s
      .should('be.visible')
      .type(password);

  }

  clickSignup() {
    cy.get('button[title="Create an Account"]').click();
}

  validateMessage(type, expectedText) {
    const messageSelector = `[data-ui-id="message-${type}"]`; // Common selector for both messages
  
    cy.get(messageSelector)
      .should('be.visible')
      .and('contain.text', expectedText);
  }
  

}

export default SignupPage;
