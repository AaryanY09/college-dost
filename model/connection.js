// Create database first

// const mysql = require("mysql");

// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"stdio@123",
//     database:"college_dost",
//     port:3306               //always give this no.
// });

// con.connect((err)=>{
//     if(err) throw err;
//     console.log("Connection Created");
// });
// module.exports = con;






const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connection Created");
});

module.exports = con;