// bring in express
const express = require('express');

// create express server
const server = express();

// bring in extra tools
const helmet = require('helmet');
const cors = require('cors');

// middlware 
server.use(helmet());
server.use(express.json())
server.use(logger);
server.use(cors());


// router 
const ZooRouter = require('./zoos/zoo_router');

server.use('/api/zoos', ZooRouter);


function logger(req, res, next) {
    console.log(`${req.method} Request`)
    next();
};

module.exports = server;
