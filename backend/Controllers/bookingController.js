var Booking = require("../services/bookingservice");
var config = require("../config");
var async = require("async");

exports.add = (req, res, next) => {
  var query = {};
  query.date = req.body.date;
  query.location = req.body.location;
  query.salon_id = req.body.salon_id;
  query.stylist_id = req.body.stylist_id;
  query.session = req.body.session;
  query.service = req.body.service;

  Booking.addBooking(query, ret => {
    if (ret)
      res.json({
        status: "success adding booking",
        bookingId: ret.id
      });
  });
};

exports.getOneBooking = (req, res, next) => {
  // console.log(req.json());
  var stylist_id = req.params.id;

  Booking.getStylistBooking(stylist_id, rows => {
    res.json(rows);
    // if (!rows || !rows.length) {
    //     res.json({
    //         "status": "failed",
    //         "task": null
    //     })
    // } else {
    //     res.json({
    //         "status": "success",
    //         "task": rows[0]
    //     })
    // }
  });
};

exports.deleteBooking = (req, res, next) => {
  var booking_id = req.params.id;

  Booking.deleteBookingStylist(booking_id, rows => {
    res.json(rows);
  });
};
