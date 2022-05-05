import { AdminDashboard } from "../pages/admin/dashboard";
import { Login } from "../pages/admin/login";
import { Post } from "../pages/admin/post";

const dashboard = new AdminDashboard();
const login = new Login();
const post = new Post();

/**
 * Agrupación de Escenarios prof Funcionalidad
 * F001: Creación de Posts/Pages
 */
describe('Funcionalidad: Creación de Post/Pages', () =>{

    before(() => {
        // GIVEN that the admin user logs-in to ghost
        login.login('admin.user@test.com', 'Admin@Test$MISW4103');
        dashboard.navigate();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    });

    it('E001: Creación de un Post Básico', () => {
        // GIVEN (additional to the login)

        // WHEN the admin goes to create a Post, writes a title
        // and writes text content
        dashboard.createPost();
        let title = post.writePostTitle();
        let article = post.writePostArticle();

        // THEN the post should appear as the first item in the
        // Post list when he exits the editor.
        post.exitEditorWithBackButton();
        post.getPostFromListByTitle(title, (post) => expect(post).to.exist);
    });
});