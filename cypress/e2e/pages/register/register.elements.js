export class RegisterElements {
    static get elements() {
        return {
            get firstName() {
                return cy.get('input#input-firstname');
            },
            get lastName() {
                return cy.get('input#input-lastname');
            },
            get eMail() {
                return cy.get('input#input-email');
            },
            get password() {
                return cy.get('input#input-password');
            },
            get privacyPolicyCheck() {
                return cy.get('input[name="agree"]');
            },
            get continueButton() {
                return cy.get('button[type="submit"]');
            }
        }
    }
}