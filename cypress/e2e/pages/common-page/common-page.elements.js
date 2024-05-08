export class CommonPageElements {
    static get myAccount() {
        return cy.contains('span', 'My Account');
    }

    static get register() {
        return cy.get('a[href="https://demo.opencart.com/index.php?route=account/register&language=en-gb"]');
    }

    static get login() {
        return cy.contains('a', 'Login').eq(0)
        

    }
}