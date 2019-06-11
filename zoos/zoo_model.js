// bring in knex
const knex = require('knex')

// setup config for knex
const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.db3'
  },
  useNullAsDefault: true
}

// set knex config to db
const db = knex(config)

module.exports = {
    find,
    findById,
    update,
    add,
    remove
}

function find(){
    return db('zoos')
}

function findById(id){
    return db('zoos')
    .where({id})
}


function add(newPost){
    return db('zoos')
    .insert(newPost)
}

function update(id, change){
   return db('zoos')
   .where({id})
   .update(change)
}

function remove(id){
    return db('zoos')
    .where({id})
    .del()
}