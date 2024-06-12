const bcrypt = require('bcrypt'); 
const pool = require('../db');

const createUser = async (req, res) => {
  try {
    const { full_name, email, user_role, designation, password } = req.body;   
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
        'INSERT INTO users (full_name, email,user_role, designation, password) VALUES ($1, $2, $3, $4,$5)',
        [full_name, email, user_role, designation,hashedPassword]
      );
    console.log(result);
    res.status(201).json({ full_name, email, user_role, designation }); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createUser };