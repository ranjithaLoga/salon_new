
var path = require('path');
var config = {
    debug: true,
    port: 3005,
    mysql: {
        host: 'localhost',
        username: 'root',
        password: 'root',
        database: 'aaa'
    }
}
console.log("config page")

module.exports = config;
