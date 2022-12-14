const axios = require('axios');
const chai = require('chai');
const should = chai.should();

const userUrl = 'https://petstore.swagger.io/v2/user'

class Functions {

    async createNewUser(credentials) {
        await axios.post(userUrl, {
                "id": credentials[0].id,
                "username": credentials[0].username,
                "firstName": credentials[0].firstName,
                "lastName": credentials[0].lastName,
                "email": credentials[0].email,
                "password": credentials[0].password,
                "phone": credentials[0].phone,
                "userStatus": credentials[0].userStatus
            })
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot create new user, error: ${error.message}}`,
                );
            })
    }

   async getUser(username,credentials) {
        await axios.get(userUrl + "/" + username)
        .then(function(response) {
            response.status.should.be.equal(200)
            response.data.id.should.be.equal(parseInt(credentials[0].id))
            response.data.username.should.be.equal(credentials[0].username)
            response.data.firstName.should.be.equal(credentials[0].firstName)
            response.data.lastName.should.be.equal(credentials[0].lastName)
            response.data.email.should.be.equal(credentials[0].email)
            response.data.password.should.be.equal(credentials[0].password)
            response.data.phone.should.be.equal(credentials[0].phone)
            response.data.userStatus.should.be.equal(parseInt(credentials[0].userStatus))
        })
            .catch(function(error) {
                throw new Error(
                    `Cannot check if user is created, error: ${error.message}}`,
                );
            })
    }

    async emailUpdate(username, email, credentials) {
         await axios.put(userUrl + "/" + username, {
            "id": credentials[0].id,
            "username": credentials[0].username,
            "firstName": credentials[0].firstName,
            "lastName": credentials[0].lastName,
            "email": email,
            "password": credentials[0].password,
            "phone": credentials[0].phone,
            "userStatus": credentials[0].userStatus
            })
            .then(function(response) {
                response.status.should.be.equal(200)

            })
            .catch(function(error) {
                throw new Error(
                    `Cannot update email for this user, error: ${error.message}}`,
                );
            })
    }

    async checkEmail(email,credentials) {
        await axios.get(userUrl + "/" + credentials[0].username)
        .then(function(response) {
            response.status.should.be.equal(200)
            response.data.username.should.be.equal(credentials[0].username)
            response.data.email.should.be.equal(email)
        })
            .catch(function(error) {
                throw new Error(
                    `Cannot check email update, error: ${error.message}}`,
                );
            })
    }

    async loginUser(username, password) {

        await axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `User cannot login, error: ${error.message}}`,
                );
            })
    }

    async logoutUser() {
        await axios.get(userUrl + "/" + "logout")
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `User cannot logout, error: ${error.message}}`,
                );
            })
    }

    async deleteUser(username) {
        await axios.delete(userUrl + "/" + username,)
            .then(function(response) {
                response.status.should.be.equal(200)
            })
            .catch(function(error) {
                throw new Error(
                    `Cannot delete user, error: ${error.message}}`,
                );
            })
    }

    async getDeletedUser(username) {
        await axios.get(userUrl + "/" + username)
            .then(function(response) {
                throw new Error(
                    `User is not deleted, error: ${response.data}}`,
                );

            })
            .catch(function(error) {
                error.response.status.should.be.equal(404)
                error.response.data.message.should.be.equal("User not found")
            })
    }
}
module.exports = new Functions();