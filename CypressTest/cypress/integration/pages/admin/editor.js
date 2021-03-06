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
        let paragraph = faker.lorem.paragraphs();
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
    publish() {
        cy.get('div.gh-publishmenu-trigger').click();
        cy.wait(300);
        cy.get('button.gh-publishmenu-button').click();
        cy.wait(300);
        cy.get('div.modal-content > div.modal-footer > button.gh-btn-black')
            .click();
        cy.wait(300)
    }
    clickEditorSettingsToggle() {
        cy.get('button.settings-menu-toggle').click();
        cy.wait(300);
    }
    writeUrlSlug() {
        let slug = faker.lorem.slug();
        cy.get('input.post-setting-slug').clear().type(slug, {force: true});
        cy.wait(300);
        return slug;
    }
    writeExcerpt() {
        let excerpt = faker.lorem.paragraph();
        cy.get('textarea.post-setting-custom-excerpt')
            .clear().type(excerpt, {force: true});
        cy.wait(300);
        return excerpt;
    }
    deleteArticle() {
        cy.get('button.settings-menu-delete-button').click();
        cy.wait(300);
        cy.get('div.modal-content > div.modal-footer > button.gh-btn-red')
            .click();
        cy.wait(300)
    }
    getPreview(){
        cy.get('button[class="gh-btn gh-editor-preview-trigger"]').click();
        cy.wait(300);
    }
    getPreviewContent(title, callback) {
        let previewItem = cy.get('iframe.gh-pe-iframe').first().its('0');
        callback(previewItem);
    }
    exitPriview(){
        cy.get('button.gh-editor-back-button').click();
        cy.wait(300);
    }
    clickEditorSettingsView(){
        cy.get('a.post-view-link').click();
        cy.wait(300);
    }
    singlePublish() {
        cy.get('div.gh-publishmenu-trigger').click();
        cy.wait(300);
        cy.get('button.gh-publishmenu-button').click();
        cy.wait(300);
    }
}

class Post extends Editor {
    editPage = 'post';

    navigateToPosts() {
        cy.visit(adminUrls.postUrls.listUrl);
        cy.wait(300);
    }
    hasPostsInList() {
        let contentList = cy.get('ol.posts-list');
        return contentList.find('li').length > 0;
    }
    getPostListItems(callback) {
        cy.get('li.gh-posts-list-item')
            .each(($p, index, $list) => callback($p, index, $list));
    }
    findTitleOnPostItem(pItem, callback) {
        cy.wrap(pItem).find('h3.gh-content-entry-title')
            .invoke('text').then(txt => callback(txt));
    }
    getPostFromListByTitle(title, callback) {
        let postItem = cy.contains('li', title).first();
        callback(postItem);
    }
    goPostFromListByTitle(title) {
        cy.contains('h3.gh-content-entry-title', title).first().click();
        cy.wait(300);
    }
    clickPublishButton() {
        cy.get('div.gh-publishmenu-trigger').click();
        cy.wait(300);
    }
    clickSetItLiveButton() {
        cy.get('div.gh-publishmenu-radio').first().click();
        cy.wait(300);
    }

    clickScheduleForLateButton() {
        cy.contains('div.gh-publishmenu-radio', "Schedule it for later").first().click();
        cy.wait(300);
        cy.get('div.gh-date-time-picker-time > input').invoke('val').then(timeString => {
            cy.log(timeString);
            let hours = timeString.split(':');
            let actualDate = new Date(Date.UTC(2020, 0, 1, hours[0], hours[1], 0));
            let scheduledDate = new Date(actualDate.getTime() + (3*60000));
            cy.wait(500);
            let hplusm = scheduledDate.getUTCHours() + ':' + scheduledDate.getUTCMinutes();
            cy.get('div.gh-date-time-picker-time > input').clear().type(hplusm);
            cy.wait(300);
        });
    }

    clickScheduleForLateButtonError() {
        cy.contains('div.gh-publishmenu-radio', "Schedule it for later").first().click();
        cy.wait(300);
        cy.get('div.gh-date-time-picker-time > input').invoke('val').then(timeString => {
            cy.log(timeString);
            let hours = timeString.split(':');
            let actualDate = new Date(Date.UTC(2020, 0, 1, hours[0], hours[1], 0));
            let scheduledDate = new Date(actualDate.getTime() - (3*60000));
            cy.wait(500);
            let hplusm = scheduledDate.getUTCHours() + ':' + scheduledDate.getUTCMinutes();
            cy.get('div.gh-date-time-picker-time > input').clear().type(hplusm);
            cy.wait(300);
            cy.get('button.gh-publishmenu-button').click();
            cy.wait(300);
        });
    }
    clickPublish() {
        cy.get('button.gh-publishmenu-button').click();
        cy.wait(300);
        cy.get('div.modal-content > div.modal-footer > button.gh-btn-black').click();
        cy.wait(300)
    }
    clickUnpublish() {
        cy.get('button.gh-publishmenu-button').click();
        cy.wait(300);
    }
    clickUpdateButton() {
        cy.get('div.gh-publishmenu').click();
        cy.wait(300);
    }
    navigateToPostFromHome() {
        cy.visit(`${adminUrls.editorUrl}/${this.editPage}`);
        cy.wait(300);
    }
    getPostByTitleFromHome(title, callback) {
        let postItem = cy.contains('article', title).first();
        callback(postItem);
    }
    getTimeErrorPost(callback){
        cy.get('div.gh-date-time-picker-error').first().then((item => callback(item)));
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
        cy.get('li.gh-posts-list-item')
            .each(($p, index, $list) => callback($p, index, $list));
    }
    getPageFromListByTitle(title, callback) {
        let postItem = cy.contains('li', title).first();
        callback(postItem);
    }
    setTagPage(tagName){
        cy.get('#tag-input').clear().type(tagName).type('{enter}');
        cy.wait(300);
    }
    deletePage(){
        cy.get('div.settings-menu-content > form > button').click();
        cy.wait(300);
        cy.get('div.modal-content > div.modal-footer > button.gh-btn-red').click();
        cy.wait(300);
    }
}

class Tag {

    navigateToPosts() {
        cy.visit(adminUrls.tagUrls.listUrl);
        cy.wait(300);
    }
    createNewTag() {
        cy.get('a.ember-view[href="#/tags/new/"]').first().click();
        cy.wait(300);
    }
    WriteTagName() {
        let name = faker.lorem.words();
        cy.get('#tag-name').type(name);
        cy.wait(300);
        return name;
    }
    ReadTagName(callback) {
        cy.get('#tag-name').val(val => callback(val));
    }
    WriteTagDesc() {
        let desc = faker.lorem.word();
        cy.get('#tag-description').type(desc)
            .invoke('text', desc);
        return desc;
    }
    readTagDesc(callback) {
        cy.get('#tag-description')
            .invoke('text').then(txt => callback(txt));
    }
    saveTag() {
        cy.get('button.ember-view[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(300);
    }
    
}

export {Post, Page, Tag};