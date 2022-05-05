import { AdminDashboard } from "../pages/admin/dashboard";
import { Login } from "../pages/admin/login";
import { Post } from "../pages/admin/post";

const dashboard = new AdminDashboard();
const login = new Login();
const post = new Post();

describe('Primer Escenario: Creación de Post', () =>{

    before(() => {
        login.login('admin.user@test.com', 'Admin@Test$MISW4103');
        dashboard.navigate();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    });

    it('Something', () => {
        //GIVEN
        dashboard.createPost();
        let title = post.writePostTitle();
        let article = post.writePostArticle();
    });
});