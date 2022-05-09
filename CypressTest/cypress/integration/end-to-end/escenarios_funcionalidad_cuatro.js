import { AdminDashboard } from "../pages/admin/dashboard";
import { Login } from "../pages/admin/login";
import { Post, Page, Tag } from "../pages/admin/editor";

const dashboard = new AdminDashboard();
const login = new Login();
const page = new Page();
const tag = new Tag();


/**
 * Agrupación de Escenarios prof Funcionalidad
 * F004: Creación de Tags
 */
describe('Funcionalidad: Creación de Tags', () =>{

    before(() => {
        // GIVEN that the admin user logs-in to ghost
        login.login('carlos.cortes.ing@gmail.com', 'Abc1q2w3e4r5t');
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        dashboard.navigate();
    });

    it('E001: Asignar un nuevo Tag a una nueva Pagina y filtrar por dicho Tag', () => {
        // GIVEN (additional to the login)

        //Creat a Tag
        dashboard.createTag();
        tag.createNewTag();

        let name = tag.WriteTagName();
        let description = tag.WriteTagDesc();

        //Save the tag
        tag.saveTag();
        //Create a Page
        dashboard.getPages();
        page.createNewPage();
        let title = page.writeTitle();
        let article = page.writeArticle();
        
        //Assign a Tag to a page
        page.clickEditorSettingsToggle();
        page.setTagPage(name);
        page.clickEditorSettingsToggle();
        page.singlePublish();

        dashboard.getPages();

        page.getFirstFromListByTitle(title,(pItem) => {
            pItem.click();
            cy.wait(300);
            page.readArticle((txt) => expect(txt).to.equal(article));
        });            
    });
});