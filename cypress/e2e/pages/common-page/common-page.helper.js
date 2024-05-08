import { CommongPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {
    static navigateToTheAplication() {
        cy.visit(CommongPageConstants.applicationURL);
    }

    static clickOnMyAccountOption() {
        CommonPageElements.myAccount.click();
    }

    static clickOnRegisterOption() {
        CommonPageElements.register.click();
    }

    static generateRandomString = (length = 10) => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };

    static generateRandomEmail() {
        const usernameLength = 10;
        const domainLength = 8;
        const usernameChars = "abcdefghijklmnopqrstuvwxyz";
        const domainChars = "abcdefghijklmnopqrstuvwxyz";
        let email = "";

        for (let i = 0; i < usernameLength; i++) {
            const randomIndex = Math.floor(Math.random() * usernameChars.length);
            email += usernameChars.charAt(randomIndex);
        }

        email += "@";

        for (let j = 0; j < domainLength; j++) {
            const randomIndex = Math.floor(Math.random() * domainChars.length);
            email += domainChars.charAt(randomIndex);
        }

        email += ".com";

        return email;
    }

    static clickOnLoginOption() {
        CommonPageElements.login.click();
    }
}