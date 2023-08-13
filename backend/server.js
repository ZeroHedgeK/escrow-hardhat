const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001; // Change the server port to 3001
const escrows = [];
app.use(cors());

app.use(bodyParser.json());

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the list of escrows
app.get('/escrows', (req, res) => {
  res.json(escrows);
});

// Endpoint to add a new escrow
app.post('/escrows', (req, res) => {
  const newEscrow = req.body;
  escrows.push(newEscrow);
  res.json(newEscrow);
});

// Serve the React app on any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
