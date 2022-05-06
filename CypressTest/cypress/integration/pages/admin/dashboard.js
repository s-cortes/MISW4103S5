import { adminUrls } from "../../helpers/urls";

export class AdminDashboard {
    navigate() {
        cy.visit(adminUrls.dasboardUrl);
        cy.wait(300);
    }
    createPost() {
        cy.get('a.gh-nav-new-post').click();
        cy.wait(300);
    }
    getPosts() {
        cy.get('a.ember-view[href="#/posts/"]').click();
        cy.wait(300);
    }
    getPages() {
        cy.get('a.ember-view[href="#/pages/"]').click();
        cy.wait(300);
    }
    getTags() {
        cy.get('a.ember-view[href="#/tags/"]').click();
        cy.wait(300);
    }
    getMembers() {
        cy.get('a.ember-view[href="#/members/"]').click();
        cy.wait(300);
    }
} 