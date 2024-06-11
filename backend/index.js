const express = require('express');
require('dotenv').config();
const cors = require('cors'); 
const bodyParser = require('body-parser');
const app = express();
const port = process.env.BACKEND_PORT;

app.use(bodyParser.json());
app.use(cors()); 
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
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