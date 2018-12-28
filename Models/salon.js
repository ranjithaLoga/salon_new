var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var Salon = sequelize.define("salon", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reg_No: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  location: {
    type: Sequelize.STRING,
    allowNull: false
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
sequelize.sync({ force: false }).then(() => {
  console.log("Database & table salon created!");
});
console.log("salon page");

module.exports = Salon;
