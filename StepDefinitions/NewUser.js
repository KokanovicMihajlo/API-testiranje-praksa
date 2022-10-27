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


Then('A new user should be created',async() => {
    Functions.getUser();

});


When('A user updates email',async() => {
    Functions.emailUpdate();
});


Then('His email should be updated',async() => {
    Functions.checkEmail();
});


Then('A user should be able to login successsfully',() => {
    Functions.loginUser(credentials);
});


Then('A user should be able to logout successsfully',() => {
    Functions.logoutUser();
});


When('A user wants to be deleted',async() => {
    Functions.deleteUser();
});


Then('A user should be deleted',async() => {
     Functions.getDeletedUser();
});