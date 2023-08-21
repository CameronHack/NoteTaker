const express = require('express');
const app = express();
const PORT = 18000;
const path = require('path');

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3000/images/cat.jpg

app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://127.0.0.1:${PORT}`)
);
