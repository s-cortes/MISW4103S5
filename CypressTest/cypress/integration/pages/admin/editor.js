const { faker } = require('@faker-js/faker');
import { adminUrls } from "../../helpers/urls";

class Editor {
    navigateToEditor() {
        cy.visit(`${adminUrls.editorUrl}/${this.editPage}`);
        cy.wait(300);
    }
    writeTitle() {
        let title = faker.lorem.words();
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);
        return title;
    }
    readTitle(callback) {
        cy.get('textarea.gh-editor-title').val(val => callback(val));
    }
    writeArticle() {
        let paragraph = faker.lorem.paragraph();
        cy.get('article.koenig-editor > div > div > p')
            .invoke('text', paragraph);
        return paragraph;
    }
    readArticle(callback) {
        cy.get('article.koenig-editor > div > div > p')
            .invoke('text').then(txt => callback(txt));
    }
    exitEditorWithBackButton() {
        cy.get('a.gh-editor-back-button').click();
        cy.wait(300);
    }
}

class Post extends Editor {
    navigateToPosts() {
        cy.visit(adminUrls.postUrls.listUrl);
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

class Page extends Editor {
    navigateToPages() {
        cy.visit(adminUrls.pageUrls.listUrl);
        cy.wait(300);
    }
    createNewPage() {
        cy.get('a.ember-view[href="#/editor/page/"]').click();
        cy.wait(300);
    }
    getListItems(callback) {
        cy.get('li.gh-posts-list-item').then(posts => callback(posts));
    }
    getFirstFromListByTitle(title, callback) {
        let postItem = cy.contains('li', title).first();
        callback(postItem);
    }
    getPageListItems(callback) {
        cy.get('li.gh-posts-list-item').then(posts => callback(posts));
    }
    getPageFromListByTitle(title, callback) {
        let postItem = cy.contains('li', title).first();
        callback(postItem);
    }
}

export {Post, Page};