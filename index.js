require('./config');
const { database } = require('./bootstrap');
const User = require('./app/models/v1/User');
 User.addNewUser({
    username: 'guu55',
    first_name: 'Dane',
    last_name: 'Shingu',
    email: 'dane.shingu@yahoo.com',
    secret_key: 'Pa$$word01',
    token: 'my-custom-token'
}).catch((e) => console.log(e));