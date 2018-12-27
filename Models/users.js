var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");

var Users = sequelize.define("users", {
  name: {
    type: Sequelize.STRING(45),
    allowNull: false
  },

  password: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database & table users created!");
});
console.log("Users page");

module.exports = Users;
