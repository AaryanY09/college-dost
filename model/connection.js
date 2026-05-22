

const mysql = require("mysql2");
require("dotenv").config();
// It reads the .env file
// Stores all values inside process.env
//process.env is an object in Node.js that stores environment variables.
// When you use:

// require("dotenv").config();

// It makes these available like:

// process.env.DB_HOST → "localhost"
// process.env.DB_USER → "root"

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});



con.connect((err)=>{
    if(err){
        console.log("DB ERROR:", err);
        return;
    }
    console.log("MySQL Connected");
});

module.exports = con;




// Problem:

// Password is visible ❌
// Not secure ❌
// Hard to change for production ❌

// With .env:

// host: process.env.DB_HOST

// Benefits:

// Keeps secrets safe ✔
// Easy to change config ✔
// Used in real companies ✔