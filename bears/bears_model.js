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
    return db('bears')
}

function findById(id){
    return db('bears')
    .where({id})
}


function add(newPost){
    return db('bears')
    .insert(newPost)
}

function update(id, change){
   return db('bears')
   .where({id})
   .update(change)
}

function remove(id){
    return db('bears')
    .where({id})
    .del()
}