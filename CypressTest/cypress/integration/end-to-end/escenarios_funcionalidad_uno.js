import { AdminDashboard } from "../pages/admin/dashboard";
import { Login } from "../pages/admin/login";
import { Post, Page } from "../pages/admin/editor";

const dashboard = new AdminDashboard();
const login = new Login();
const post = new Post();
const page = new Page();


/**
 * Agrupación de Escenarios prof Funcionalidad
 * F001: Creación de Posts/Pages
 */
describe('Funcionalidad: Creación de Post/Pages', () =>{

    before(() => {
        // GIVEN that the admin user logs-in to ghost
        login.login('carlos.cortes.ing@gmail.com', 'Abc1q2w3e4r5t');
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        dashboard.navigate();
    });

    it('E001: Creación de un Post Básico', () => {
        // GIVEN (additional to the login)

        // WHEN the admin goes to create a Post, writes a title
        // and writes text content
        dashboard.createPost();
        let title = post.writeTitle();
        let article = post.writeArticle();

        // THEN the post should appear as the first item in the
        // list, and the article's context should be the same as
        // the one written before
        post.exitEditorWithBackButton();
        post.getPostFromListByTitle(title, (pItem) => {
            expect(pItem).to.exist;
            pItem.click();
            cy.wait(300);
            post.readArticle((txt) => expect(txt).to.equal(article));
        });
    });

    it('E002: Creación de un Page Básico', () => {
        // GIVEN (additional to the login)

        // WHEN the admin goes to create a Page, writes a title
        // and writes text content
        dashboard.getPages();
        page.createNewPage();

        let title = page.writeTitle();
        let article = page.writeArticle();

        // THEN the page should appear as the first item in the
        // list, and the article's context should be the same as
        // the one written before
        page.exitEditorWithBackButton();
        page.getFirstFromListByTitle(title, (pItem) => {
            expect(pItem).to.exist;
            pItem.click();
            cy.wait(300);
            page.readArticle((txt) => expect(txt).to.equal(article));
        });
    });

    it('E003: Creación y edición de un post', () => {
        // GIVEN (additional to the login)

        // WHEN the admin goes to create a Post, writes a title
        // and writes text content
        dashboard.createPost();
        let title = post.writeTitle();
        let titleEdited = post.writeTitle();
        let article = post.writeArticle();
        let articleEdited = post.writeArticle();

        // THEN the post should appear as the first item in the
        // list, and the article's context should be the same as
        // the one written before
        post.publish();
        post.exitEditorWithBackButton();
        
        post.getPostFromListByTitle(title, (pItem) => {
            pItem.click();
        });
        
        titleEdited = post.writeTitle();
        articleEdited= post.writeArticle();

        post.clickEditorSettingsToggle();
        post.clickEditorSettingsView();
        post.readArticle((txt) => expect(txt).to.equal(articleEdited));
    });

    it('E004: Creación de una pagina y su eliminación', () => {
        // GIVEN (additional to the login)

        // WHEN the admin goes to create a Page, writes a title
        // and writes text content
        dashboard.getPages();
        page.createNewPage();

        let title = page.writeTitle();
        let article = page.writeArticle();

        // THEN the page should appear as the first item in the
        // list, and the article's context should be the same as
        // the one written before
        page.exitEditorWithBackButton();
        page.getFirstFromListByTitle(title, (pItem) => {
            expect(pItem).to.exist;
            pItem.click();
            cy.wait(300);
            page.readArticle((txt) => expect(txt).to.equal(article));
        });

        page.singlePublish();
        page.exitEditorWithBackButton();
        
        page.getPageFromListByTitle(title, (pItem) => {
            pItem.click();
        });

        page.clickEditorSettingsToggle();
        
        page.deletePage();
    });
});