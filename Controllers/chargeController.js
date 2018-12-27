var Charge = require('../services/chargeservive');
var config = require('../config');
var async = require('async');

exports.getOne = (req, res, next) => {
    // console.log(req.json());
    var stylist_id = req.params.id;
    //var stylist_id = "1";

    Booking.getStylistCharge(stylist_id, service, (rows) => {

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
    })
};

exports.add = (req, res, next) => {
    var query = {};
    query.stylistId = req.body.stylistId;
    query.service = req.body.service;
    query.session = req.body.session;
    query.amount = req.body.amount;
    Charge.addSCharge(query, (ret) => {
        if (ret) res.json({
            status: "success",
            chargeId: ret.id
        })
    });
};



