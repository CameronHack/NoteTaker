const express = require('express');
const app = express();
const PORT = 18000;
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.post('/api/notes', (req, res) => {
  console.log(`notes ${req.method} request`)

  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
    };

    notes.push(newNote)

    const notesString = JSON.stringify(notes, null, 2);

    fs.writeFile(`./db/db.json`, notesString, (err) =>
      console.log(err)
    )
  }
  
});

app.listen(PORT, () =>
  console.log(`Live at http://127.0.0.1:${PORT}`)
);
