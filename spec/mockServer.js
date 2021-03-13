const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const router = require('../server/router.js');

const server = express();

server.use(bodyparser.json());
server.use(morgan('dev'));
server.use(cors());

// server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);

module.exports = server;
