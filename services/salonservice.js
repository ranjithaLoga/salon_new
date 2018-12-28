//var models=require('../Models');
var sequelize = require("../common/mysql");
//var Salon=models.Salon;
var Salon = require("../Models/salon");

exports.getAllSalon = (query, cb) => {
  var statement = "SELECT * FROM salons";

  sequelize.query(statement).then(data => {
    cb(data);
  });
};

exports.modSalon = (query, cb) => {
  var queryObj = {};
  salonId = query.Salon_Id;
  queryObj.name = query.name;
  queryObj.location = query.location;
  Salon.update(queryObj, {
    where: {
      id: salonId
    }
  }).then(data => {
    cb(data);
  });
};

exports.addSalon = (query, cb) => {
  var queryObj = {};
  queryObj.name = query.name;
  queryObj.reg_No = query.reg_No;
  queryObj.location = query.location;
  queryObj.number = query.number;
  // queryObj.mobile_Number = query.mobile_Number;
  console.log(queryObj);
  Salon.create(queryObj)
    .then(dat => {
      console.log(data.dataValues);
      cb(data.dataValues);
    })
    .catch(err => {
      cb(err);
    });
};
