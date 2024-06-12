const bcrypt = require('bcrypt'); 
const pool = require('../db');
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const { full_name, email, user_role = true, designation, password } = req.body;   
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
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password); 
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    console.log(user.rows[0]);  
    const token = jwt.sign({ id: user.rows[0].id, email: user.rows[0].email ,user_role:user.rows[0].user_role}, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token }); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
module.exports = { createUser,userLogin };