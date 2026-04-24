const express = require("express");
const router = express.Router();

const mentorC = require("../controllers/mentorC");

router.get("/mentorlog",(req,res)=>{
    res.render("mentorlog");
})
router.post("/mentorlog",mentorC.mentorlog); //function name in mentorC


router.get("/mentordash", (req, res) => {

    // 🔐 Protect route
    if (!req.session.mentor) {
        return res.redirect("/login");
    }
    res.render("mentordash", {
        mentor: req.session.mentor
    });
});


router.get("/mentprofile",(req,res)=>{
    res.render("mentprofile",{
        mentor : req.session.mentor
    });
})


router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports=router;