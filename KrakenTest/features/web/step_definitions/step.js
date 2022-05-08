const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
        let element = await this.driver.$('input[name="identification"]');
        return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
        let element = await this.driver.$('input[name="password"]');
        return await element.setValue(password);
});

When('I click sing in', async function() {
        let element = await this.driver.$('button[type="submit"]');
        return await element.click();
});

When('I click on post', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click on new post', async function () {
    let element = await this.driver.$('a[href="#/editor/post/"]');
     return await element.click();
});

When('I click on the post title', async function () {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.click();
});

When('I copy a text {kraken-string}', async function ($name_1) {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    element.setValue($name_1);
    return await element.click();
});

When('I click on the begin writing your ... section', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.click();
});

When('I copy a text on the begin writing your ... section {kraken-string}', async function ($string_1) {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.setValue($string_1);
    return await element.click();
});

When('I preview it', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-editor-preview-trigger"]');
    return await element.click();
});

When ('I go back', async function () {
    let element = await this.driver.$('button[class="gh-editor-back-button"]');
    return await element.click();
});

When ('I Open the post settings', async function () { 
    let element = await this.driver.$('button[title="Settings"]'); //class="ghost-url-preview description ember-view"
    return await element.click();
});

When('I click on the publish option', async function () {
    let element = await this.driver.$('div[class="gh-publishmenu ember-view"] > div:nth-child(1)');
    return await element.click();
});

When('I click on publish button', async function () {
    let element = await this.driver.$('footer[class="gh-publishmenu-footer"] > button:nth-child(2)');
    return await element.click();
}); 

When('I publish it', async function () {
    let element = await this.driver.$('div[class="modal-footer"] > button:nth-child(2)');
    return await element.click();
}); 

When ('I clic on view post', async function () { 
    let element = await this.driver.$('a[class="post-view-link"]');
    return await element.click();
});

Then('I should see the tittle {kraken-string}', async function ($name_1) {
    let varx = $name_1;
    let element = await this.driver.$('h1[class="article-title"]');
    let vary = await element.getText();
    await element.click();
    expect(vary.trim()).to.equal(varx);
    return varx === vary
    //assert.strictEqual(varx, vary);   
});

Then('I should see the body text {kraken-string}', async function ($string_1) {
    let varx = $string_1;
    let element = await this.driver.$('section[class="gh-content gh-canvas"] > p:nth-child(1)');
    let vary = await element.getText();   
    await element.click();
    expect(vary.trim()).to.equal(varx);
    return varx === vary
    //assert.strictEqual(vary,varx);
});

// Post/Page Editor Step Commands -----------------------------------------------------------------
When('I write a title on the Editor {kraken-string}', async function($title) {
    let editorTitle = await this.driver.$('textarea.gh-editor-title');
    await editorTitle.click();
    return await editorTitle.setValue($title)
});

When('I write the text content on the Editor {kraken-string}', async function($textContent) {
    let editorTextContent = await this.driver.$('article.koenig-editor > div > div > p');
    await editorTextContent.click();
    return await editorTextContent.setValue($textContent)
});

When('I exit the editor using the back button', async function() {
    return await this.driver.$('a.gh-editor-back-button').click();
});

When('I click the Editor Settings menu', async function() {
    return await this.driver.$('button.settings-menu-toggle').click();
});

When('I modify the current URL slug {kraken-string}', async function($slug) {
    let editorSlug = await this.driver.$('input.post-setting-slug');
    return await editorSlug.setValue($slug);
});

When('I modify the current Excerpt {kraken-string}', async function($excerpt) {
    let editorExcerpt = await this.driver.$('textarea.post-setting-custom-excerpt');
    return await editorExcerpt.setValue($excerpt);
});

When('I click the button to delete the article', async function() {
    return await this.driver.$('button.settings-menu-delete-button').click();
});

When('I confirm the decision to delete the article', async function() {
    return await this.driver.$('div.modal-content > div.modal-footer > button.gh-btn-red')
        .click();
});

Then('I should see in the Editor the text {kraken-string} that was written before', async function($textContent) {
    let textContent = await this.driver.$('article.koenig-editor > div > div > p').getText();
    expect(textContent.trim()).to.equal($textContent);
});

// Post List Step Commands ------------------------------------------------------------------------
Then('I should find the new Post {kraken-string} as the first list item', async function($title) {
    let postItem = await this.driver.$('h3.gh-content-entry-title');
    let titleFound = await postItem.getText();
    expect(titleFound.trim()).to.equal($title);
    return await postItem.click(); 
});

Then('I should not find the new Post {kraken-string} as the first list item', async function($title) {
    let postItem = await this.driver.$('h3.gh-content-entry-title');
    let titleFound = await postItem.getText();
    expect(titleFound.trim()).to.not.equal($title);
    return await postItem.click(); 
});

// Page List Step Commands ------------------------------------------------------------------------
When('I go to Pages List', async function() {
    return await this.driver.$('a.ember-view[href="#/pages/"]').click();
});

When('I create a new Page', async function() {
    return await this.driver.$('a.ember-view[href="#/editor/page/"]').click();
});

Then('I should find the new Page {kraken-string} as the first list item', async function($title) {
    let postItem = await this.driver.$('h3.gh-content-entry-title');
    let titleFound = await postItem.getText();
    expect(titleFound.trim()).to.equal($title);
    return await postItem.click(); 
});

// (Not Admin) Home Page Commands -----------------------------------------------------------------
When('I visit a particular post {kraken-string} {kraken-string}', async function ($url, $slug) {
    return await this.driver.url(`${$url}/${$slug}`);
});

Then('I should find the new Excerpt {kraken-string} as the first item in the post list', async function($excerpt) {
    let postExcerpt = await this.driver.$('.post-card-excerpt > p');
    let ExcerptFound = await postExcerpt.getText();
    expect(ExcerptFound.trim()).to.equal($excerpt);
    return await postExcerpt.click(); 
});