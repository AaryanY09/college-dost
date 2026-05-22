//from app.js we are here

//const express = require("express");
//const router = express.Router();  //“I will define all student-related routes here” ;Router() is inbuilt in Express,
//const studentController = require("../controllers/studentC");  //You are importing logic from controlle
// college dost
// │
// ├── routes
// │   └── studentR.js   👈 (you are HERE)
// │
// ├── controllers
// │   └── studentC.js   👈 (you want this file)
// From routes/studentR.js:
// Go back → ../
// Go into controllers
// Access studentC.js

// form page
// router.get("/add", (req, res) => {
//     res.render("add");  //runs add.hbs (your form page)
// });

// form submit
 //router.post("/add", studentController.addStudent);      //addStudent is just function name came from controller,we can write anything instead of it ,it isnt inbuilt
//“If POST /add comes → call addStudent” 


//module.exports = router;



const express = require("express");
const router = express.Router();

const studentC = require("../controllers/studentC");

//data will go from server to browser
router.get("/signup",(req,res)=>{
    res.render("signup");
})
// Here you are passing an arrow function as an argument
// This is called a callback function
// You are directly giving function to another function
//data will come from browser and go to server->
router.post("/signup",studentC.signup);
//signup is function name in controller not page






router.get("/studentlog",(req,res)=>{
    res.render("studentlog");
})
router.post("/login",studentC.login);



router.get("/dashboard", (req, res) => {

    // 🔐 Protect route
    if (!req.session.user) {
        return res.redirect("/login");
    }

    res.render("studentDashboard", {
        user: req.session.user
    });
});






router.get("/stdprofile",(req,res)=>{
    res.render("stdprofile",{
        user:req.session.user
    });
})





router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});







router.get("/contact",(req,res)=>{
    res.render("contact");
})

router.post("/contact",studentC.contact);


router.get("/topMentors", studentC.topMentors);

module.exports=router;