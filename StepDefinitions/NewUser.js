const {
    Given,
    When,
    Then,} = require('cucumber');

const Functions = require('../Functions.js');
let credentials

Given('I want to create new user',async(dataTable) => {
    credentials = dataTable.hashes();
    await Functions.createNewUser(dataTable);
});


Then('A new user should be created',async(username) => {
    await Functions.getUserByUsername(username, credentials);

});


When('A user updates email',async(email, username) => {
    await Functions.emailUpdate(email, username, credentials);
});


Then('His email should be updated',async(email) => {
    await Functions.checkEmailUpdate(email, credentials);
});


Then('A user should be able to login successsfully',() => {
    Functions.loginUser(credentials);
});


Then('A user should be able to logout successsfully',() => {
    Functions.logoutUser();
});


When('A user wants to be deleted',async(username,firstName,lastName,email) => {
    await Functions.deleteUser(username,firstName,lastName,email);
});


Then('A user should be deleted',async(username,firstName,lastName,email) => {
    await Functions.getDeletedUser(username,firstName,lastName,email);
});