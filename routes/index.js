const express = require('express');
const notesRouter = require('./notes');
const app = express();

// routes url to notes
app.use('/notes', notesRouter);

module.exports = app;