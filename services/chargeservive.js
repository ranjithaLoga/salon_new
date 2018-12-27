var sequelize = require("../common/mysql");
var Charge = require("../Models/charge");
var Salon = require("../Models/salon");
var Stylist = require("../Models/stylist");

exports.getStylistCharge = (id, service, cb) => {
  var stylistId = id;
  var service = service;
  console.log("stylistId", stylistId);
  var statement =
    "SELECT session, amount FROM charges, stylist WHERE charges.stylistId=stylist.id AND charges.stylistId=:stylist_id AND AND charges.service=:seviceType ";

  console.log(statement);
  sequelize
    .query(statement, {
      raw: true,
      replacements: { stylist_id: stylistId, serviceType: service }
    })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};

exports.addSCharge = (query, cb) => {
  var queryobj = {};
  queryobj.stylistId = query.stylistId;
  queryobj.service = query.service;
  queryobj.session = query.session;
  queryobj.amount = query.amount;
  console.log(queryobj);
  Charge.create(queryobj)
    .then(data => {
      console.log(data.dataValues);
      cb(data.dataValues);
    })
    .catch(err => {
      cb(err);
    });
};
