var Salon = require('../services/salonservice');
var config = require('../config');
var async = require('async');

exports.list = (req, res, next) => {
    var query = {};
    async.series({
        list: (cb) => {
            Salon.getAllSalon(query, (rows) => {
                cb(null, rows[0])
            });
        }
    }, (err, ret) => {
        var data = {
            status: "success",
            list: ret.list,

        };
        console.log("json ");
        res.json(data);
    });

};

exports.update = (req, res, next) => {
    var query = {};
    query.salon_id = req.body.salon_id;
    query.name = req.body.name;
    query.location = req.body.location;
    Salon.modSalon(query, (ret) => {
        if (ret.length >= 0) res.json({
            status: "update success"
        });
    });
};

exports.add = (req, res, next) => {
    var query = {};
    query.name = req.body.name;
    query.location = req.body.location;

    Salon.addSalon(query, (ret) => {

        if (ret) res.json({
            status: "success adding salon",
            salonId: ret.id
        })
    });
}