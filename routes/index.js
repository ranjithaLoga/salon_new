// Module Dependencies

var express = require("express");
var router = express.Router();
var salon = require("../Controllers/salonController");
var stylist = require("../Controllers/stylistController");
var booking = require("../Controllers/bookingController");
var charge = require("../Controllers/chargeController");

//salon list
router.get("/salon/list", salon.list);

//update salon
router.post("/salon/mod", salon.update);

//add Salon
router.post("/salon/add", salon.add);

//get stylist
router.get("/stylist/list", stylist.list);

//update all stylists
router.post("./stylist/mod");

//add Stylist
router.post("/stylist/add", stylist.add);

//add booking
router.post("/booking/add", booking.add);

//get stylist booking
router.get("/bookings/stylist/:id", booking.getOneBooking);

//delete Booking
router.delete("/bookings/delete/:id", booking.deleteBooking);

//add charges
router.post("/charge/add", charge.add);

//get charges
router.get("/charge/get/:id/:session", charge.getOne);

module.exports = router;
