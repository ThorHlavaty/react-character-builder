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

router.get('/', function(req, res, next) {
  models.Character.findAll()
  .then(characters => {
    res.json(characters)
  })
});

router.get('/:id', (req, res) => {
  models.Character.findByPk(req.params.id)
  .then(character => {
    if (character) {
    res.json(character)
    }
    else{
      res.status(404).json({
        error: 'My God. I cannot find it!'
      })
    }
  })
})

router.delete('/:id', (req, res) => {
  models.Character.destroy({
      where: {
          id: req.params.id
      }
      })
  .then(deleted => {
      if (deleted === 1){
      res.status(202).json({
          sucess: 'Very well. The deed is done.'
      })
      } else {
      res.status(404).json({
          error: 'No target to destroy, sire.'
      })
      }
  })
})



module.exports = router;