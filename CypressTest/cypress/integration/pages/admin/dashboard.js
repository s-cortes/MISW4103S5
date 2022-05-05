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
        cy.get('li > a.gh-nav-list-new[href="#/posts/"]').click();
        cy.wait(300);
    }
    getPages() {
        cy.get('li > a.gh-nav-list-new[href="#/pages/"]').click();
        cy.wait(300);
    }
    getTags() {
        cy.get('li > a.gh-nav-list-new[href="#/tags/"]').click();
        cy.wait(300);
    }
    getMembers() {
        cy.get('li > a.gh-nav-list-new[href="#/members/"]').click();
        cy.wait(300);
    }
} 