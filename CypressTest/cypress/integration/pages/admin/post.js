const { faker } = require('@faker-js/faker');
import { adminUrls } from "../../helpers/urls";

export class Post {
    navigateToEditor() {
        cy.visit(adminUrls.postUrls.postEditorUrl);
        cy.wait(300);
    }
    navigateToPosts() {
        cy.visit(adminUrls.postUrls.postListUrl);
        cy.wait(300);
    }
    writePostTitle() {
        let title = faker.lorem.words();
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);
        return title;
    }
    writePostArticle() {
        let paragraph = faker.lorem.paragraph();
        cy.get('article.koenig-editor > div > div > p')
            .invoke('text', paragraph);
    }
    exitEditorWithBackButton() {
        cy.get('a.gh-editor-back-button').click();
        cy.wait(300);
    }
    getPostListItems(callback) {
        cy.get('li.gh-posts-list-item').then(posts => callback(posts));
    }
    getPostFromListByTitle(title, callback) {
        let postItem = cy.contains('li', title).first();
        callback(postItem);
    }
}