const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai'); 
const { faker } = require('@faker-js/faker');

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

When('I click on published post', async function () {
    let element = await this.driver.$('a[title="Published"]');
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
    await element.click();    
});

Then('I should see the title {kraken-string}', async function ($name_1) {
    let frame= await this.driver.$('iframe.gh-pe-iframe');      
    this.driver.pause(5000);
    this.driver.switchToFrame(frame);
    let element = await this.driver.$('h1.article-title');   
    let actual = await element.getText();
    let expected = $name_1;
    await element.click();
    assert.equal(actual, expected);
    this.driver.switchToParentFrame();
});

When ('I go back', async function () {
    let element = await this.driver.$('button.gh-editor-back-button');
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
    let element = await this.driver.$('footer.gh-publishmenu-footer > button:nth-child(2)');
    return await element.click();
}); 

When('I publish it', async function () {
    let element = await this.driver.$('div.modal-footer > button:nth-child(2)');
    return await element.click();
}); 

When ('I clic on view post', async function () { 
    let element = await this.driver.$('a.post-view-link');
    return await element.click();
});

Then('I should see the tittle {kraken-string}', async function ($name_1) {
    let expected = $name_1;
    let element = await this.driver.$('h1.article-title');
    let actual = await element.getText();
    assert.equal(actual, expected);
});

Then('I should see the text body {kraken-string}', async function ($string_1) {
    let expected = $string_1;
    let element = await this.driver.$('.gh-content gh-canvas > p:nth-child(1)');
    let actual = await element.getText();   
    assert.equal(actual, expected);    
});

When ('I click on Tags', async function () { 
    let element = await this.driver.$('a[href="#/tags/"]');     
    return await element.click();
});

When ('I click on New Tag option', async function () { 
    let element = await this.driver.$('a[href="#/tags/new/"]');     
    return await element.click();
});

When ('I click on Tag Name', async function () { 
    let element = await this.driver.$('input[class="ember-text-field gh-input ember-view"]');     
    return await element.click();
});

When ('I click on Tag description', async function () { 
    let element = await this.driver.$('textarea[name="description"]');     
    return await element.click();
});

When ('I click on Save', async function () { 
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');     
    return await element.click();
});

When ('I click on Tag option', async function () { 
    let element = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]');     
    return await element.click();
});

When ('I select the Tag {kraken-string}', async function (tag) { 
    let element = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]');     
    await element.setValue(tag+'\n');
    return await element.click();
});

When ('I click on Tag Filter', async function () { 
    let element = await this.driver.$('div[class="gh-contentfilter-menu gh-contentfilter-tag "] > div:nth-child(1)');     
    return await element.click();
});

When ('I select Tag Filter val {kraken-string}', async function (val) {
    let xpath = '//li[text()="'+val+'"]';  
    let element = await this.driver.$(xpath);     
    return await element.click();
});

When ('I select the published post {kraken-string}', async function (val) {
    let xpath = '//li/a[1]/h3[text()="'+val+'"]';  
    let element = await this.driver.$(xpath);     
    return await element.click();
});

Then ('I should see the created page {kraken-string}', async function ($name_1) {
    let expected = $name_1;
    let element = await this.driver.$('h3[class="gh-content-entry-title"]');     
    let actual = await element.getText();   
    assert.equal(actual, expected);    
});

When('I click on the Schedule it for later option', async function () {
    let element = await this.driver.$('div.gh-publishmenu-section > div:nth-child(2) > div:nth-child(1)');
    return await element.click();
});

When('I click on the Schedule button', async function () {
    let element = await this.driver.$('footer.gh-publishmenu-footer > button:nth-child(2)');
    return await element.click();
});

When('I click on the Schedule button from the modal', async function () {
    let element = await this.driver.$('div.modal-footer > button:nth-child(2)');
    return await element.click();
});

Then('I preview it on mobile mode', async function () {
    let element = await this.driver.$('div.gh-post-preview-btn-group > div:nth-child(1) > button:nth-child(2)');
    return await element.click();
});

//Pages actions
When ('I click on Page', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});
    
When ('I click on New Page option', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When ('I click on page title', async function () {
    let element = await this.driver.$('textarea[placeholder="Page title"]');
    return await element.click();
});

When ('I click on the begin writing your page section', async function () {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.click();
});

When ('Then I preview the page', async function () {
    let element = await this.driver.$('section.flex > div:nth-child(1) > button:nth-child(1)');
    return await element.click();
});