Feature: MyGhostPreviewTest

@user1 @web
Scenario: Como administrador de ghost inicio sesion, creo un nuevo post, lo previsualizo en modo normal y móvil, luego lo publico
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
   And I copy a text "$name_1"
   And I wait for 2 seconds
   And I click on the begin writing your ... section
   And I wait for 2 seconds
   And I copy a text on the begin writing your ... section "$string_1"
   And I wait for 2 seconds
   When I preview it
   And I wait for 6 seconds
   And I go back
   And I wait for 2 seconds
   And I Open the post settings
   And I wait for 2 seconds   
   And I click on the publish option
   And I wait for 2 seconds   
   And I click on publish button
   And I wait for 2 seconds   
   And I publish it
   And I wait for 3 seconds   
   And I clic on view post
   And I wait for 5 seconds
   Then I should see the tittle "$$name_1"
   And I wait for 2 seconds
   Then I should see the body text "$$string_1"
   And I wait for 6 seconds      