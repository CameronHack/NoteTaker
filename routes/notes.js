const notes = require('express').Router();
const fs = require('fs');
const notesDB = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// links api notes
notes.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '../db/db.json'))
  );

// posts notes to db.json
notes.post('/', (req, res) => {

  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    notesDB.push(newNote)

    const notesString = JSON.stringify(notesDB, null, 2);

    fs.writeFile(`./db/db.json`, notesString, (err) => console.log(err))

    res.send(201)
  }

});

module.exports = notes;