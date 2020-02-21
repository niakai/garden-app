/*
 * GET DB.
 */

var data = require('../data.json');

exports.view= function(req, res) {
    res.render("DB", data);
};
