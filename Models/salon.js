var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Salon = sequelize.define('salon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },

    location: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },

});
sequelize.sync({ force: false }).then(() => {
    console.log('Database & table salon created!')
})
console.log("salon page");

module.exports = Salon;