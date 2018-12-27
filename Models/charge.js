var Sequelize = require('sequelize');
var sequelize= require('../common/mysql');
var Stylist = require('./stylist');

var Charge = sequelize.define('charge', { 
    id: {
        type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
    },

    stylistId: {
        type: Sequelize.INTEGER,
        references: {
            model: Stylist,
            key: 'id'
        }
    },

    service:{
        type: Sequelize.STRING(45),
        allowNull: false
    },

    session: {
        type: Sequelize.STRING(45),
        allowNull: false,

    },

    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

sequelize.sync({ force: false }).then(() => {
    console.log('Database & table charges created!')
})
console.log("charge page");

module.exports = Charge;