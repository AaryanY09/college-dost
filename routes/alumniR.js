const express = require("express");
const router = express.Router();

const alumniC = require("../controllers/alumniC");

router.get("/alumnilog",(req,res)=>{
    res.render("alumnilog");
})

router.post("/alumnilog",alumniC.alumnilog); //function name in mentorC


router.get("/alumnidash", (req, res) => {

    // 🔐 Protect route
    if (!req.session.alumni) {
        return res.redirect("/login");
    }

    res.render("alumnidash", {
        alumni: req.session.alumni
    });
});


router.get("/aluprofile",(req,res)=>{
    res.render("aluprofile",{
        alumni:req.session.alumni
    });
})

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports=router;