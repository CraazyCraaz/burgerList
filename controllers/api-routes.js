const express = require("express");
const db = require('../models');
const router = express.Router();

    router.get("/api/burgers", function (req, res) {
        db.Burger.findAll().then(function (dbBurger) {
            res.json(dbBurger);
        })
    });

    router.put("/api/burgers/:id", function (req, res) {
           var devoured = req.body.devoured  === "true"
           console.log(devoured);
           
        db.Burger.update({
            devoured: devoured
        },{
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data)
        })

    })

    router.post("/api/burgers", function (req, res) {
        db.Burger.create(req.body).then(function (dbBurger) {
            res.json(dbBurger)
        })
    });

    router.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });



module.exports = router;