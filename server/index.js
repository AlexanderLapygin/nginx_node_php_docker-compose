'use strict';

const express = require('express');

const server = express();

server.get('/', (req, res, next) => {
    res.json({ message: 'Hello world!' });
});
server.get('/endpoint1', (req, res, next) => {
    res.json({ message: 'endpoint1: Hello world!' });
});
server.get('/endpoint2', (req, res, next) => {
    res.json({ message: 'endpoint2 Hello world!' });
});

server.listen(8000, () => {
    console.log('Express server listening on 8000');
});
