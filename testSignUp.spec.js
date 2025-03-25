import SignupPage from '../../signUp.js';

describe("Signup Page Tests", () => {
  const signup = new SignupPage();

  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/');
  });

  it("should sign up successfully with valid details", () => {
    signup.clickOnCreate()
    signup.enterFirstName("JothiLakshmi");
    signup.enterLastName("Rajendran");
    signup.enterEmail("jothiraj@gmail.com");
    signup.enterPassword("Strong@123");
    signup.enterConfirmPassword("Strong@123");
    signup.clickSignup();
    signup.validateMessage('success', 'Thank you for registering with Main Website Store');
    
  });

  it("should show error for existing email", () => {
    signup.clickOnCreate()
    signup.enterFirstName("JothiLakshmi");
    signup.enterLastName("Rajendran");
    signup.enterEmail("joraj@gmail.com");
    signup.enterPassword("Strong@123");
    signup.enterConfirmPassword("Strong@123");
    signup.clickSignup();
    signup.validateMessage('error', 'There is already an account with this email address.');
  });

});
