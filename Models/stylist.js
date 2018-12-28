var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var Stylist = sequelize.define("stylist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },

  location: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  experiance: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & table stylist created!");
});
console.log("stylist page");

module.exports = Stylist;
