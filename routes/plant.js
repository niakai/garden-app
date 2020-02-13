/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(req, res) {

    console.log(req.params)
    let plantName = null;
    if (req.params.name) {
        plantName = req.params.name;

    }

    console.log(plantName);

    res.render("plant", data);
};
