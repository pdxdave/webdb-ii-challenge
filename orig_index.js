// // bring in knex
// const knex = require('knex')

// // setup config for knex
// const config = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/lambda.db3'
//   },
//   useNullAsDefault: true
// }

// // set knex config to db
// const db = knex(config)

// const express = require('express');
// const helmet = require('helmet');

const server = express();



server.use(express.json());
server.use(helmet());

// endpoints here


// GET all animals
server.get('/api/zoos', (req, res) => {
  db('zoos')
  .then(zoos => {
    res.status(200).json(zoos)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

// GET animals by ID
server.get('/api/zoos/:id', (req, res) => {
  db('zoos')
  .where({id: req.params.id})
  .then(zoos => {
    res.status(200).json(zoos)
  })
  .catch(error => {
    res.status(500).json(error)
  });
})

// POST  a new animal
server.post('/api/zoos', (req, res) => {
  db('zoos')
  .insert(req.body, 'id')
  .then(ids => {
    res.status(201).json(ids)
  })
  .catch(error => {
    res.status(500).json(ids)
  })
})

// UPDATE an animal
server.put('/api/zoos/:id', (req, res) => {
   const change = req.body
   db('zoos')
   .where({id: req.params.id})
   .update(change)
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
server.delete('/api/zoos/:id', (req, res) => {
  db('zoos')
  .where({ id: req.params.id})
  .del()
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


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
