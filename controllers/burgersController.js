const express = require("express");
const router = express.Router();
const db = require('../models')

// send homepage
router.get('/', (req, res) => {
  db.Burger.findAll({}).then((data) => {
    // console.log(data[0].dataValues);
    
    res.render('index', {burgers:data});
  })

})
module.exports = router;