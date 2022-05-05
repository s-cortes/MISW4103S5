import { adminUrls } from "../../helpers/urls";

export class Login {
    login(userName, password) {
        cy.visit(adminUrls.loginUrl);
        cy.wait(300);
        cy.get('#ember7').type(userName);
        cy.get('#ember9').type(password);
        cy.get('#ember11').click();
        cy.wait(300);
    }
}