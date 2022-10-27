Feature: API requests

    Testing API requests
    
    Scenario: Testing basic API requests and responses
        Given I want to create new user
        Then  A new user should be created

        When  A user updates email
        Then  His email should be updated
        
        Then  A user should be able to login successsfully
        Then  A user should be able to logout successsfully
        
        When  A user wants to be deleted
        Then  A user should be deleted

        Examples:
        | id  | username | firstName | lastName  | email           | password  | phone      | userStatus  |
        | 111 | Djole111 | Djordje   | Djordjevic| djole@gmail.com | ovojesifra| 00381225599| 1           |