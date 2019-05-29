var express = require('express');
var router = express.Router();
var burger = require ('../models/burger.js');

console.log("Reading this line");

router.get('/', function (req, res) {
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        console.log("Made it here");
        res.render('index',{burger_data});
    })
    
});

module.exports = router;