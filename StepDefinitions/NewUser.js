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


Then('A new user {string} should be created',async(username) => {
    await Functions.getUser(username,credentials);

});


When('A user {string} updates email to {string}',async(username,email) => {
    await Functions.emailUpdate(username,email,credentials);
});


Then('His email should be updated to {string}',async(email) => {
    await Functions.checkEmail(email,credentials);
});


Then('A user should be able to login successsfully',async() => {
   await Functions.loginUser(credentials);
});


Then('A user should be able to logout successsfully',async() => {
    await Functions.logoutUser();
});


When('A user {string} wants to be deleted',async(username) => {
    await Functions.deleteUser(username);
});


Then('A user {string} should be deleted',async(username) => {
    await Functions.getDeletedUser(username);
});