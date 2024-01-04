export class registerPage {

    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        acceptPolicyCheckBox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary'
    }

    openUrl(Url){
        cy.visit(Cypress.env('URL'));
    }
    enterFirstName(Fname){
        cy.get(this.weblocators.firstName).type(Fname);
    }
    enterLastName(Lname){
        cy.get(this.weblocators.lastName).type(Lname);
    }
    enterEmail(emailId){
        cy.get(this.weblocators.email).type(emailId);
    }
    enterTelephone(phoneNumber){
        cy.get(this.weblocators.telephone).type(phoneNumber);
    }
    enterPasswordAndConfirmPassword(password){
        cy.get(this.weblocators.password).type(password);
        cy.get(this.weblocators.confirmPassword).type(password);
    }
    checkPrivacyPolicy(){
        cy.get(this.weblocators.acceptPolicyCheckBox).check();
    }
    clickOnContinue(){
        cy.get(this.weblocators.continueButton).click();
    }
}