//go to the folder ,open cmd from folder
//in cmd prompt ,write 'npm init'  ,this will install .json file
//.json file is important for running any scripts 
//after that write package name,here it is : nodejsmysql,press enter
//after that keep pressing enter
//then write cmd 'npm i express nodemon mysql',this cmd is for creating nodemon and mysql in folder
//for installing hbs:npm install hbs
//npm install express-session dotenv
//create file named.env
//write "start":"nodemon App.js" inside package.json folder in script below test

//Create database first

//controllers:->Logic
//Models:->queries

//LINKING FLOW:->
// app.js
//    ↓ require
// routes/studentR.js
//    ↓ require
// controllers/studentC.js
//    ↓ require
// models/studentM.js
//    ↓ require
// models/connection.js

// const something = require("path");
// module.exports = something;

// authRoutes → authController → userModel → db
// mentorRoutes → mentorController → mentorModel → db


const express = require("express");
const path = require("path");       //it is build in method used to handle file paths
const session = require("express-session");
const dotenv = require("dotenv");
const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

dotenv.config(); // load env

// app.set("view engine","hbs");
// app.set("views","./view");
// middleware
// Required when:

// Using <form method="POST">
// Sending data from HTML/hbs form
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view"));





// pages
app.get("/", (req, res) => {
    res.render("clone");
});

app.get("/login",(req,res)=>{
    res.render("login");
})




app.get("/adminlog", (req, res) => {
    res.render("adminlog");
});

app.get("/spotlight",(req,res)=>{
    res.render("spotlight");
})

app.get("/FAQ",(req,res)=>{
    res.render("FAQ");
});

app.get("/Guidelines",(req,res)=>{
    res.render("Guidelines");
});

app.get("/PrivacyP",(req,res)=>{
    res.render("PrivacyP");
})

app.get("/AboutUs",(req,res)=>{
    res.render("AboutUs");
})

app.get("/Empower",(req,res)=>{
    res.render("Empower");
})

app.get("/viewdata",(req,res)=>{
    res.render("viewdata");
})  



const studentR = require("./routes/studentR");
app.use("/student",studentR);

const mentorR = require("./routes/mentorR");
app.use("/mentor",mentorR);

const alumniR = require("./routes/alumniR");
app.use("/alumni",alumniR);

const adminR = require("./routes/adminR");
app.use("/admin",adminR);








app.listen(port,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Server is running at port %d",port);
    }
});



// insert into admin values (1,'xyz','admin@123');