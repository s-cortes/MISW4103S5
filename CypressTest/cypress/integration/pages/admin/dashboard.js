import { adminUrls } from "../../helpers/urls";

export class AdminDashboard {
    navigate() {
        cy.visit(adminUrls.dasboardUrl);
        cy.wait(300);
    }
    createPost() {
        cy.get('a#ember27').click();
        cy.wait(300);
    }
    getPosts() {
        cy.get('a#ember26.ember-view').click();
        cy.wait(300);
    }
    getPages() {
        cy.get('a#ember28.ember-view').click();
        cy.wait(300);
    }
    getTags() {
        cy.get('a#ember29.ember-view').click();
        cy.wait(300);
    }
    getMembers() {
        cy.get('a#ember30.ember-view').click();
        cy.wait(300);
    }
} 