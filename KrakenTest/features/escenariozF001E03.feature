Feature: MyGhostPreviewTest

@user1 @web
Scenario: Como administrador de ghost inicio sesion, creo una nueva pagina, lo previsualizo, luego la publíco para validar que el título fue igual a ingresado por el falseador
   Given I navigate to page "<URL>"
   And I wait for 3 seconds
   And I enter email "<USERNAME1>"
   And I wait for 3 seconds
   And I enter password "<PASSWORD1>"
   And I wait for 3 seconds
   And I click sing in
   And I wait for 3 seconds
   And I click on Page
   And I wait for 3 seconds
   And I click on New Page option
   And I wait for 3 seconds
   And I click on page title
   And I wait for 3 seconds
   And I enter text "$name_1"
   And I wait for 3 seconds
   And I click on the begin writing your ... section
   And I wait for 3 seconds
   And I enter text "$string_1"
   And I wait for 3 seconds   
   When I preview it   
   And I wait for 8 seconds 
   Then I should see the title "$$name_1"
   And I wait for 3 seconds
   And I go back
   And I wait for 3 seconds  
   And I click on the publish option
   And I wait for 3 seconds   
   And I click on publish button
   And I wait for 4 seconds 
   And I Open the post settings
   And I wait for 4 seconds  
   And I clic on view post
   And I wait for 5 seconds 
   Then I should see the tittle "$$name_1"
   And I wait for 15 seconds

@user2 @web
Scenario: Como administrador de ghost inicio sesion, creo un nuevo post, lo previsualizo, luego la publíco para validar que el título fue igual a ingresado por el falseador
   Given I navigate to page "<URL>"
   And I wait for 2 seconds
   And I enter email "<USERNAME1>"
   And I wait for 2 seconds
   And I enter password "<PASSWORD1>"
   And I wait for 2 seconds
   And I click sing in
   And I wait for 2 seconds
   And I click on post
   And I wait for 2 seconds
   And I click on new post
   And I wait for 2 seconds
   And I click on the post title
   And I wait for 2 seconds
   And I copy a text "$name_2"
   And I wait for 2 seconds
   And I click on the begin writing your ... section
   And I wait for 2 seconds
   And I copy a text on the begin writing your ... section "$string_2"
   And I wait for 2 seconds
   When I preview it
   And I wait for 2 seconds 
   Then I should see the title "$$name_2"
   And I go back
   And I wait for 2 seconds    
   And I click on the publish option
   And I wait for 2 seconds   
   And I click on publish button
   And I wait for 2 seconds   
   And I publish it
   And I wait for 3 seconds   
   And I Open the post settings
   And I wait for 3 seconds  
   And I clic on view post
   And I wait for 5 seconds
   Then I should see the tittle "$$name_2"
   And I wait for 3 seconds

@user3 @web
Scenario: Como administrador de ghost inicio sesion, creo una nuevo tag, creo una nueva pagina, le asigno el nuevo tag, luego la publíco y en la página principal de páginas, filtro por el nuevo tag creado para validar que aparezca solo la nueva página
   Given I navigate to page "<URL>"
   And I wait for 2 seconds
   And I enter email "<USERNAME1>"
   And I wait for 2 seconds
   And I enter password "<PASSWORD1>"
   And I wait for 2 seconds
   And I click sing in
   And I wait for 2 seconds
   And I click on Tags
   And I wait for 2 seconds
   And I click on New Tag option
   And I wait for 2 seconds
   And I click on Tag Name
   And I wait for 2 seconds
   And I enter text "$name_3"
   And I wait for 2 seconds
   And I click on Tag description
   And I wait for 2 seconds
   And I enter text "$string_3"
   And I wait for 2 seconds
   And I click on Save
   And I wait for 2 seconds
   And I click on Page
   And I wait for 2 seconds
   And I click on New Page option
   And I wait for 2 seconds
   And I click on page title
   And I wait for 2 seconds
   And I enter text "$name_4"
   And I wait for 2 seconds
   And I click on the begin writing your ... section
   And I wait for 2 seconds
   And I enter text "$string_4"
   And I wait for 2 seconds  
   And I Open the post settings
   And I wait for 2 seconds  
   And I click on Tag option
   And I select the Tag "$$name_3"
   And I wait for 7 seconds  
   And I click on the publish option
   And I wait for 2 seconds   
   And I click on publish button
   And I wait for 3 seconds
   And I click on Page
   And I wait for 3 seconds
   And I click on Tag Filter
   And I wait for 7 seconds
   When I select Tag Filter val "$$name_3"
   And I wait for 7 seconds
   Then I should see the created page "$$name_4"
   And I wait for 7 seconds

@user4 @web
Scenario: Como administrador de ghost inicio sesion, creo un nuevo post, lo previsualizo, luego la publíco, voy a la lista de posts y selecciono el post, lo selecciono y lo edito luego lo publico y valido que el titulo sea igual al editado
   Given I navigate to page "<URL>"
   And I wait for 2 seconds
   And I enter email "<USERNAME1>"
   And I wait for 2 seconds
   And I enter password "<PASSWORD1>"
   And I wait for 2 seconds
   And I click sing in
   And I wait for 2 seconds
   And I click on post
   And I wait for 2 seconds
   And I click on new post
   And I wait for 2 seconds
   And I click on the post title
   And I wait for 2 seconds
   And I copy a text "$name_5"
   And I wait for 2 seconds
   And I click on the begin writing your ... section
   And I wait for 2 seconds
   And I copy a text on the begin writing your ... section "$string_5"
   And I wait for 2 seconds    
   And I click on the publish option
   And I wait for 2 seconds   
   And I click on publish button
   And I wait for 2 seconds   
   And I publish it
   And I wait for 2 seconds
   And I click on post
   And I wait for 2 seconds
   And I click on published post
   And I wait for 2 seconds
   And I select the published post "$$name_5"
   And I wait for 2 seconds
   And I copy a text "$name_6"
   And I wait for 2 seconds
   And I click on the begin writing your ... section
   And I wait for 2 seconds
   And I copy a text on the begin writing your ... section "$string_6"
   And I wait for 2 seconds
   And I click on the publish option
   And I wait for 2 seconds   
   And I click on publish button
   And I wait for 2 seconds  
   And I Open the post settings
   And I wait for 3 seconds  
   And I clic on view post
   And I wait for 5 seconds
   Then I should see the tittle "$$name_6"
   And I wait for 3 seconds   