const axios = require('axios');
const chai = require('chai');
const should = chai.should();

const userUrl = 'https://petstore.swagger.io/#/user'
let dataTable

class Functions {

    async createNewUser() {
        const data = dataTable.hashes();
        await axios.post(userUrl, {
                "id": data[0].id,
                "username": data[0].username,
                "firstName": data[0].firstName,
                "lastName": data[0].lastName,
                "email": data[0].email,
                "password": data[0].password,
                "phone": data[0].phone,
                "userStatus": data[0].userStatus
            })
            .then(function(response) {
                response.status.should.be.equal(200)
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot post, error: ${error.message}}`,
                );
            })
    }

   async getUserByUsername(username, credentials) {
        await axios.get(userUrl + "/" + username)
        .then(function(response) {
            response.status.should.be.equal(200)
            console.log(response)
            response.data.id.should.be.equal(credentials[0].id)
            response.data.username.should.be.equal(credentials[0].username)
            response.data.firstName.should.be.equal(credentials[0].firstName)
            response.data.lastName.should.be.equal(credentials[0].lastName)
            response.data.email.should.be.equal(credentials[0].email)
            response.data.password.should.be.equal(credentials[0].password)
            response.data.phone.should.be.equal(credentials[0].phone)
            response.data.userStatus.should.be.equal(credentials[0].userStatus)
        })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot get, error: ${error.message}}`,
                );
            })
    }

    emailUpdate(email, username, credentials) {
         axios.put(userUrl + "/" + username, {
                email:'djole111@gmail.com'
            })
            .then(function(response) {
                response.status.should.be.equal(200)
                console.log(response)

            })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot put, error: ${error.message}}`,
                );
            })
    }

    async checkEmailUpdate(email, credentials) {
        await axios.get(userUrl + "/" + credentials[0].username)
        .then(function(response) {
            response.status.should.be.equal(200)
            console.log(response)
            response.data.id.should.be.equal(credentials[0].id)
            response.data.username.should.be.equal(credentials[0].username)
            response.data.email.should.be.equal(email)
        })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot get, error: ${error.message}}`,
                );
            })
    }

    async loginUser(credentials) {

        let username = credentials[0].username
        let password = credentials[0].password

        await axios.get(userUrl + "/" + "login?username=" + username + "&" + "password" + "=" + password)
            .then(function(response) {
                response.status.should.be.equal(200)
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot get, error: ${error.message}}`,
                );
            })
    }

    async logoutUser() {
        await axios.get(userUrl + "/" + "logout")
            .then(function(response) {
                response.status.should.be.equal(200)
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot get, error: ${error.message}}`,
                );
            })
    }

    async deleteUser(username) {
        await axios.delete(userUrl + "/" + username, {})
            .then(function(response) {
                response.status.should.be.equal(200)
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
                throw new Error(
                    `Cannot delete, error: ${error.message}}`,
                );
            })
    }

    async getDeletedUser(username) {
        await axios.get(userUrl + "/" + username)
            .then(function(response) {
                throw new Error(
                    `User exists, error: ${response.data}}`,
                );

            })
            .catch(function(error) {
                error.response.status.should.be.equal(404)
                error.response.data.message.should.be.equal("User not found")
                console.log(response)
            })
    }
}
module.exports = new Functions();