var Sequelize = require("sequelize");
var sequelize = require("../common/mysql");
var Salon = require("./salon");
var Stylist = require("./stylist");

console.log("booking page starts");

var Booking = sequelize.define("booking", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  date: {
    type: Sequelize.DATE,
    allowNull: false
  },

  location: {
    type: Sequelize.STRING(45),
    allowNull: true
  },

  salon_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Salon,
      key: "id"
    }
  },

  stylist_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Stylist,
      key: "id"
    }
  },

  session: {
    type: Sequelize.STRING(45),
    allowNull: false
  },

  service: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
});

// Booking.belongsTo(Salon)

sequelize.sync({ force: false }).then(() => {
  console.log("Database & table booking created!");
});
console.log("booking page");

module.exports = Booking;
