var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) { 
    burger.selectAll(function(data) { 
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(res) {
            if (res.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.sendStatus(200).end();
            }
        }
    );
});

router.post("/api/burgers/:name", function(req, res) {
    var id = rows + 1;
    var name = req.params.name;
    var columns = [id, name, 0]
    burger.insert(columns, values, function(res) {
        console.log(res.json(res))
        res.end();
    });
});

module.exports = router;