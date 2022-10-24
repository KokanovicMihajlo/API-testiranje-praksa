Feature: API requests

    Testing API requests
    
    Scenario:  API tests

        Given Request for creating new user is sent

        |  id  |  username  |  firstName  |  lastName  |  email  |  password  |  phone  |  userStatus  |
        |  18  |  Petar222 |  Petar  |  Petrovic  |  Petar222@gmail.com  |  petar222  |  00381652228775 |  1  |

        Then A new user "Petar222" should be created

        When A user updates email: "Petar222@gmail.com" for the user: "Petar222"
        Then A new email: "Petar222@gmail.com" should be updated

        Then A user should be able to login successsfully

        Then A user should be able to logout successsfully

        Then A user should be able to delete user by username: "Petar222"       

        Then A user: "Petar222" should be deleted