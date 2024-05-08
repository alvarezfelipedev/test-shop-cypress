export class LoginElements {
    static get elements() {
        return {
            get email() {
                return cy.get('input#input-email');
            },
            get password() {
                return cy.get('input#input-email');
            },
            get loginButton(){
                return cy.get('button[type="submit"]');
            }
        }
    }
}