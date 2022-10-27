const {
    Given,
    When,
    Then,} = require('cucumber');

const Functions = require('../Functions.js');

let credentials

Given('I want to create new user',async(dataTable) => {
    credentials = dataTable.hashes();
    await Functions.createNewUser(credentials);
});


Then('A new user should be created',() => {
    Functions.getUser();

});


When('A user updates email',() => {
    Functions.emailUpdate();
});


Then('His email should be updated',() => {
    Functions.checkEmail();
});


Then('A user should be able to login successsfully',() => {
    Functions.loginUser(credentials);
});


Then('A user should be able to logout successsfully',() => {
    Functions.logoutUser();
});


When('A user wants to be deleted',() => {
    Functions.deleteUser();
});


Then('A user should be deleted',() => {
     Functions.getDeletedUser();
});