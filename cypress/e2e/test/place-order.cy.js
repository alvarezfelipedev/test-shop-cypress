import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { HomeHelper } from "../pages/home/home.helper";
import { RegisterHelper } from "../pages/register/register.helper";
import { LoginHelper } from "../pages/login/login.helper";

describe('Place order', function() {
    it('Place an order with new user data', function() {
        const firstName = CommonPageHelper.generateRandomString();
        const lastName = CommonPageHelper.generateRandomString();
        const email = CommonPageHelper.generateRandomEmail();
        const password = CommonPageHelper.generateRandomString();

        CommonPageHelper.navigateToTheAplication();
        CommonPageHelper.clickOnMyAccountOption();
        CommonPageHelper.clickOnRegisterOption();
        RegisterHelper.insertName(firstName);
        RegisterHelper.insertLastName(lastName);
        RegisterHelper.insertEMail(email);
        RegisterHelper.insertPassword(password);
        RegisterHelper.clickOnPrivacyPolicyCheck();
        RegisterHelper.clickOnContinueButton();

        CommonPageHelper.clickOnMyAccountOption();
        CommonPageHelper.clickOnLoginOption();
        LoginHelper.insertEmail(email);
        LoginHelper.insertPassword(password);
        LoginHelper.clickOnLoginButton();

        cy.wait(5000)
        // HomeHelper.clickOnMensOuterwearButton();
    })
})