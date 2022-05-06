import { userUrls } from "../../helpers/urls";

export class UserHomePage {
    navigate() {
        cy.visit(userUrls.homeUrl);
        cy.wait(300);
    }
    getFirstPostByTitle(title, callback) {
        let postItem = cy.contains('a.post-card-content-link', title).first();
        callback(postItem);
    }
    getFirstPostByExcerpt(excerpt, callback) {
        let postItem = cy.contains('a.post-card-content-link', excerpt).first();
        callback(postItem);
    }
}