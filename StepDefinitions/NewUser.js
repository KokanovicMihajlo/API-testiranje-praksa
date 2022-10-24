const { Given, When, Then, And } = require('cucumber');

const Commands = require('../Commands');

Given('Request for creating new user is sent', async(dataTable) => {
    credentials = dataTable.hashes();
    await Commands.createNewUser(dataTable);
});


Then('A new user {string} should be created', async(username) => {
    await Commands.getUserByUsername(username, credentials);

});


When('A user updates email: {string} for the user: {string}', async(email, username) => {
    await Commands.emailUpdate(email, username, credentials);
});


Then('A new email: {string} should be updated', async(email) => {
    await Commands.checkEmailUpdate(email, credentials);
});


Then('A user should be able to login successsfully', async() => {
    await Commands.loginUser(credentials);
});


Then('A user should be able to logout successsfully', async() => {
    await Commands.logoutUser();
});


Then('A user should be able to delete user by username: {string}', async(username) => {
    await Commands.deleteUser(username);
});


Then('A user: {string} should be deleted', async(username) => {
    await Commands.getDeletedUser(username);
});