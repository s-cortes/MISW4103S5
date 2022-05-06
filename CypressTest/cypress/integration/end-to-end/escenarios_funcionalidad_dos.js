import { AdminDashboard } from "../pages/admin/dashboard";
import { Login } from "../pages/admin/login";
import { Post } from "../pages/admin/editor";

import { UserHomePage } from "../pages/user/home";
import { Article } from "../pages/user/article";

const dashboard = new AdminDashboard();
const login = new Login();
const post = new Post();

const homePage = new UserHomePage();
const article = new Article();

/**
 * Agrupación de Escenarios prof Funcionalidad
 * F001: Creación de Posts/Pages
 */
describe('Funcionalidad: Configuración de Post/Pages', () =>{

    before(() => {
        // GIVEN that the admin user logs-in to ghost
        login.login('admin.user@test.com', 'Admin@Test$MISW4103');
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        // GIVEN that the admin navigates to the dashboard
        dashboard.navigate();
    });

    it('E001: Modificar URL de un Post y Revisar con Usuario', () => {
        // GIVEN (additional to the login and dashboard navigation)
        // that the admin navitages to the dashboard, and selects the option
        // to create a post, and writes a title and the content for the post
        dashboard.createPost();
        let title = post.writeTitle();
        let articleContent = post.writeArticle();

        // WHEN the admin opens the editor settings menu, and selects the
        // URL input to erase it an and writes a new url slug, and
        // publishes the post
        post.clickEditorSettingsToggle();
        let slug = post.writeUrlSlug();
        post.clickEditorSettingsToggle();
        post.publish();

        // THEN after navegating to the post with the new slug,
        // the title and the content that appears in the article
        // should match the text that the admin previously wrote
        article.navigateToArticle(slug);
        cy.wait(300);
        article.readTitle((txt) => expect(txt).to.equal(title));
        article.readContent(paragraph => {
            expect(articleContent).to.contain(paragraph);
        });
    });
});