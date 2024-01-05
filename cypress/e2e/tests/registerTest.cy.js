import {registerPage} from "../../pages/registerPage";
import registerData from "../../fixtures/registerData.json";

const registerObject = new registerPage()
describe('Register a new user tests',() => {
    it('register a new user',()=>{
        registerObject.openUrl();
        registerObject.enterFirstName(registerData.firstname);
        registerObject.enterLastName(registerData.lastName);
        registerObject.enterEmail(registerData.email);
        registerObject.enterTelephone(registerData.telephone);
        registerObject.enterPasswordAndConfirmPassword(registerData.password);
        registerObject.checkPrivacyPolicy();
        registerObject.clickOnContinue();
    })
})