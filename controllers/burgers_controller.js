var express = require('express');
var router = express.Router();
var burger = require ('../models/burger.js');

console.log("Reading this line");

// route to pull all burger data
router.get('/', function (req, res) {
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        console.log("Made it here");
        res.render('index',{burger_data});
    })
    
});

// route to add burgers to the table
router.post('/api/burgers', function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ],
    [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

// route to update mySQL table
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: 1
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;