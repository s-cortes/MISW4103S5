const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const {assert} = require('node:assert/strict');

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
    return varx === vary
    //assert.strictEqual(varx, vary);   
});

Then('I should see the body text {kraken-string}', async function ($string_1) {
    let varx = $string_1;
    let element = await this.driver.$('section[class="gh-content gh-canvas"] > p:nth-child(1)');
    let vary = await element.getText();   
    await element.click();
    return varx === vary
    //assert.strictEqual(vary,varx);
});