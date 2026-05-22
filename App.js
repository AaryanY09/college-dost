//go to the folder ,open cmd from folder
//in cmd prompt ,write 'npm init'  ,this will install .json file
//.json file is important for running any scripts 
//after that write package name,here it is : nodejsmysql,press enter
//after that keep pressing enter
//then write cmd 'npm i express nodemon mysql',this cmd is for creating nodemon and mysql in folder
//for installing hbs:npm install hbs
//npm install express-session dotenv
//npm install socket.io
//npm install multer
//Multer = middleware to upload and handle files(image,videos,pdfs,etc) in Node.js (Express)

//create file .env
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


const http = require("http");
const socketIO = require("socket.io");
dotenv.config();      //dotenv.config() = load environment variables from .env file
const server = http.createServer(app);  //This line connects your Express app to the web via an HTTP server
const io = socketIO(server);
app.set("io", io);
const db = require("./model/connection");
// middleware
app.use(express.json());
//allows your server to understand JSON data sent by clients, such as from fetch requests or AJAX calls. It parses the incoming JSON payload and makes it available in req.body for your route handlers to use.




const hbs = require("hbs");

hbs.registerHelper("ifCond", function(v1, v2, options) {
  return v1 == v2 ? options.fn(this) : options.inverse(this);
});
//If user.role == "admin" → shows Welcome Admin
//Else → shows Welcome User
//options → special object provided by Handlebars
//options.fn(this) → what to render if condition is TRUE options.inverse(this) → what to render if FALSE
//v1 → first value
//v2 → second value

// app.set("view engine","hbs");
// app.set("views","./view");
// middleware
// Required when:
// Using <form method="POST">
// Sending data from HTML/hbs form
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));



const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
//     This decides what name the file will be saved as
// file.originalname → original file name
// Date.now() → current timestamp (to avoid duplicates)
  }
});

const upload = multer({ storage });
// Connects multer with your storage settings

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ fileUrl: "/uploads/" + req.file.filename });
});

//req.file contains file info
//req.file.filename → saved file name






app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,    //false → saves only when data changes (better)
    saveUninitialized: false   //false → don’t create session until something is stored 
}));
// User visits your site
// Server creates a session ID
// Session ID is stored in browser (cookie)
// Server stores session data

// SESSION_SECRET is a server-side secret key used to:
// sign/encrypt session data
// protect cookies from being tampered with
// It’s like a private key for your server, not for users.


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view"));






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


app.get("/announcement_alumni",(req,res)=>{
    res.render("announcement_alumni");
})

app.get("/topMentors",(req,res)=>{
  res.render("topMentors");
})
  
app.get("/roadmap",(req,res)=>{
  res.render("roadmap");
})


const studentR = require("./routes/studentR");
app.use("/student",studentR);

const mentorR = require("./routes/mentorR");
app.use("/mentor",mentorR);

const alumniR = require("./routes/alumniR");
app.use("/alumni",alumniR);

const adminR = require("./routes/adminR");
app.use("/admin",adminR);













// ROUTES
const chatR = require("./routes/chatR");
app.use("/chats", chatR);

const achatR = require("./routes/achatR");
app.use("/achats", achatR);

// TEST LOGIN (IMPORTANT for now) They directly put a user into session without asking:
// app.get("/test-student", (req, res) => {
//   req.session.user = { prn: 1, role: "student", name: "Student" };
//   res.redirect("/chats");
// });


// app.get("/test-mentor", (req, res) => {
//   req.session.user = { prn: 101, role: "mentor", name: "Mentor" };
//   res.redirect("/chats");
// });

// SOCKET
const chatM = require("./model/chatM");
const achatM = require("./model/achatM");





io.on("connection", (socket) => {
//socket = that specific user’s connection
  socket.on("join-chat", (chatId) => {
    socket.join(chatId);    //user joins chat using:
  });

  socket.on("message", (data) => {
    chatM.saveMessage(data, (err, result) => {
      data.message_id = result.insertId;
      io.to(data.chatId).emit("chat-message", data);
      // ✅ call model instead
      chatM.addNotification(data);
    });
  });

  socket.on("seen", (data) => {
  chatM.markSeen(data.chatId, data.userPrn, () => {
    io.to(data.chatId).emit("seen-update");
  });
});


//socket = that specific user’s connection
  socket.on("join-chat", (achatId) => {
    socket.join(achatId);    //user joins chat using:
  });

  socket.on("message", (data) => {
    achatM.saveMessage(data, (err, result) => {
      data.message_id = result.insertId;
      io.to(data.achatId).emit("chat-message", data);
      // ✅ call model instead
      achatM.addNotification(data);
    });
  });

  socket.on("seen", (data) => {
  achatM.markSeen(data.achatId, data.userPrn, () => {
    io.to(data.achatId).emit("seen-update");
  });
})


});




//.on = receive / listen
//.to use:Send message to a specific room
//This connection is built-in event of Socket.IO
//It automatically runs when a client connects
// Full flow (simple)
// User connects
// Joins chat room
// Sends message
// Message saved in DB
// Message sent to all users instantly
// User reads → “seen” event
// Others get seen update


const annR = require("./routes/annR");
app.use("/announcement", annR);


const shareConMentR = require("./routes/shareConMentR");
app.use("/shareConMent", shareConMentR);


const shareConAluR = require("./routes/shareConAluR");
app.use("/shareConAlu", shareConAluR);


const spotlightR = require("./routes/spotlightR");
app.use("/spotlight", spotlightR);


const cultureR = require("./routes/cultureR");
app.use("/culture", cultureR);









// app.listen(port,(err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("Server is running at port %d",port);
//     }
// });


server.listen(port, () => {
  console.log("Server running on port " + port);
});


// insert into admin values (1,'xyz','admin@123');