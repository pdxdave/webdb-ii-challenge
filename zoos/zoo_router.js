// bring in express
const express = require('express');

const db = require('./zoo_model.js');

const router = express.Router();


// GET all animals
router.get('/', (req, res) => {
    console.log('a string')
    db.find()                 // this references find on zoo_model
    .then(zoos => {
      res.status(200).json(zoos)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET animals by ID
router.get('/:id', (req, res) => {
    // db('zoos')
    // .where({id: req.params.id})
    db.findById(req.params.id)
    .then(zoos => {
      res.status(200).json(zoos)
    })
    .catch(error => {
      res.status(500).json(error)
    });
  })
  
  // POST  a new animal
  router.post('/', (req, res) => {
    db.add(req.body)
    // .insert(req.body, 'id')
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(error => {
      res.status(500).json(ids)
    })
  })
  
  // UPDATE an animal
  router.put('/:id', (req, res) => {
    //  db('zoos')
    //  .where({id: req.params.id})
    //  .update(change)
    db.update(req.params.id, req.body)
     .then(count => {
       if (count > 0) {
         res.status(200).json({
           message: (`${count} records updated`)
         })
       } else {
         res.status(404).json({
           message: "Could not update"
         })
       }
     })
  });
  
  
  // REMOVE an animal
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    // .where({ id: req.params.id})
    // .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} records deleted`
        })
      } else {
        res.status(404).json({
          message: "Not found"
        })
      }
    })
  });
  

  module.exports = router;