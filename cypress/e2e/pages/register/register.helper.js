import { RegisterElements } from "./register.elements";

export class RegisterHelper {
    static insertName(firstName) {
        RegisterElements.elements.firstName.invoke('val', firstName);
    }

    static insertLastName(lastName) {
        RegisterElements.elements.lastName.invoke('val', lastName);
    }

    static insertEMail(email) {
        RegisterElements.elements.eMail.invoke('val', email);
    }

    static insertPassword(password) {
        RegisterElements.elements.password.invoke('val', password);
    }

    static clickOnPrivacyPolicyCheck() {
        RegisterElements.elements.privacyPolicyCheck.click();
    }

    static clickOnContinueButton() {
        RegisterElements.elements.continueButton.click();
    }
}