var express = require('express');
var router = express.Router();
const models = require("../models")

router.post('/', (req, res) => {  
  models.Character.create({
    name: req.body.name,
    str: req.body.str,
    dex:req.body.dex,
    con:req.body.con,
    wis:req.body.wis,
    int:req.body.int,
    cha:req.body.cha,
    class:req.body.class,
    race:req.body.race
  })
  .then(post => {
    res.status(201).json(post)
  })
})


module.exports = router;