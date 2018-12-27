// Sequelize mysql

var config = require('../config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'aaa',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    }
);
console.log("mysql page");


module.exports = sequelize;