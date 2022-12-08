'use strict';
require('dotenv').config();

const http = require('http');
const host = '0.0.0.0';
const port = process.env.PORT ||3000;

const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`Server has started at ${host}:${port}`)
});

const rootController = require('./routes/index');
const dinnerController = require('./routes/dinner');

app.use('/', rootController);
app.use('/dinner', dinnerController);