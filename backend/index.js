const express = require('express');
require('dotenv').config();
const cors = require('cors'); 
const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors()); 

app.get('/', async (req, res) => {
  try {
    res.send('Database Connected Successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Backend server listening on port ${port}`);
  }
});