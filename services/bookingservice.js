//var models= require('../Models');
var sequelize = require("../common/mysql");
var Booking = require("../Models/booking");
var Salon = require("../Models/salon");
var Stylist = require("../Models/stylist");

// functions

exports.addBooking = (query, cb) => {
  var queryobj = {};
  queryobj.date = query.date;
  queryobj.location = query.location;
  queryobj.salon_id = query.salon_id;
  queryobj.stylist_id = query.stylist_id;
  queryobj.session = query.session;
  queryobj.service = query.service;
  console.log(queryobj);
  Booking.create(queryobj)
    .then(data => {
      console.log(data.dataValues);
      cb(data.dataValues);
    })
    .catch(err => {
      cb(err);
    });
};

exports.getStylistBooking = (id, cb) => {
  var stylistId = id;
  console.log("stylistId", stylistId);
  var statement =
    "SELECT bookings.date, bookings.location, salons.name, bookings.session, bookings.service FROM salons, bookings WHERE bookings.salon_id=salons.id AND bookings.stylist_id=:stylist_id";
  //var statement = ('SELECT bookings.date, bookings.location, salons.name FROM salons, bookings //WHERE bookings.salon_id=salons.id AND bookings.salon_id="1"');

  //  Booking.findAll({where:{stylist_id:stylistId}, include: [ Salon ]}).then((bookings)=>{
  //     cb(bookings);

  //  }).catch((err)=>{
  //      console.error(err)
  //     cb(err);

  //  });
  console.log(statement);
  sequelize
    .query(statement, { raw: true, replacements: { stylist_id: stylistId } })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};

exports.deleteBookingStylist = (id, cb) => {
  var bookingId = id;
  console.log("bookingid");
  var statement = "DELETE FROM bookings WHERE id=:booking_id";

  console.log(statement);
  sequelize
    .query(statement, { raw: true, replacements: { booking_id: bookingId } })
    .then(data => {
      cb(data);
    })
    .catch(err => {
      cb(err);
    });
};
