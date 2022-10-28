Feature: API requests

    Testing API requests
    
    Scenario: Testing basic API requests and responses
        Given I want to create new user

        | id  | username | firstName | lastName  | email           | password  | phone      | userStatus  |
        | 111 | Djole111 | Djordje   | Djordjevic| djole@gmail.com | ovojesifra| 00381225599| 1           |

        Then  A new user "Djole111" should be created

        When  A user "Djole111" updates email to "novimejl@gmail.com"
        Then  His email should be updated to "novimejl@gmail.com"
        
        Then  A user should be able to login successsfully
        Then  A user should be able to logout successsfully

        When  A user "Djole111" wants to be deleted
        Then  A user "Djole111" should be deleted

      