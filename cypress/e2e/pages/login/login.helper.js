import { LoginElements } from "./login.elements";

export class LoginHelper {
    static insertEmail(email) {
        LoginElements.elements.email.invoke('val', email);
    }
    
    static insertPassword(password){
        LoginElements.elements.password.invoke('val', password);
    }

    static clickOnLoginButton() {
        LoginElements.elements.loginButton.click();
    }
}