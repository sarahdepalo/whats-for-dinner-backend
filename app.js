'use strict';

const http = require('http');
const port = 3000; 

const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const server = http.createServer(app);

server.listen(port);

const rootController = require('./routes/index');
const dinnerController = require('./routes/dinner');

app.use('/', rootController);
app.use('/dinner', dinnerController);