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

    it('E002: Modificar Excerpt de un Post y Revisar con Usuario', () => {
        // GIVEN (additional to the login and dashboard navigation)
        // that the admin navitages to the dashboard, and selects the option
        // to create a post, and writes a title and the content for the post
        dashboard.createPost();
        let title = post.writeTitle();
        let articleContent = post.writeArticle();

        // WHEN the admin opens the editor settings menu, and selects the
        // excerpt field to erase it an and writes a new excerpt, and
        // publishes the post
        post.clickEditorSettingsToggle();
        let excerpt = post.writeExcerpt();
        post.clickEditorSettingsToggle();
        post.publish();

        // THEN after navegating to the reader's homepage, the post should 
        // appear (be identifiable) using the new excerpt to find it, and 
        // the title and the content that appears in the article should 
        // match the text that the admin previously wrote after
        // clicking the article.
        homePage.navigate();
        homePage.getFirstPostByExcerpt(excerpt, pItem => {
            expect(pItem).to.exist;
            pItem.click();
            cy.wait(300);

            article.readTitle((txt) => expect(txt).to.equal(title));
            article.readContent(paragraph => {
                expect(articleContent).to.contain(paragraph);
            });
        });
    });

    it('E003: Eliminación de Post y revisión en la página principal', () => {
        // GIVEN (additional to the login and dashboard navigation)
        // that the admin navitages to the Post editor, and writes 
        // a title and the content for the post, and goes back to the 
        post.navigateToEditor();
        let title = post.writeTitle();
        post.writeArticle();

        // WHEN the admin opens the editor settings menu, and selects the
        // option to delete the post, and confirms the deletion.
        post.clickEditorSettingsToggle();
        post.deleteArticle();

        // THEN the post should not appear in the list of posts.
        post.navigateToPosts();
        let hasPosts = post.hasPostsInList();
        if(hasPosts) {
            post.getPostListItems(($p, index, $list) => {
                post.findTitleOnPostItem($p, (txt) => {
                    expect(txt).to.not.equal(title);
                });
            });
        } else {
            expect(hasPosts).to.equal(false);
        }
    });
});