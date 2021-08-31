'use strict';

const http = require('http');
const port = 3000; 
const hostname = '127.0.0.1';

const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const entreeController = require('./routes/entrees');

app.use('/', rootController);
app.use('/entrees', entreeController);