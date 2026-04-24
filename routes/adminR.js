const express = require("express");
const router = express.Router();

const adminC = require("../controllers/adminC");



router.get("/adminlog",(req,res)=>{
    res.render("adminlog");
});
router.post("/adminlog",adminC.adminlog);



router.get("/adminP", (req, res) => {
    res.render("adminP");
});



router.get("/addstd",(req,res)=>{
    res.render("addstd");
})
router.post("/addstd",adminC.addstd);


router.get("/deletestd",(req,res)=>{
    res.render("deletestd");
})
router.post("/deletestd",adminC.deletestd);

router.get("/updatestd",(req,res)=>{
    res.render("updatestd");
})
router.post("/updatestd",adminC.updatestd);


router.get("/viewdata", adminC.viewData);






router.get("/addmentor",(req,res)=>{
    res.render("addmentor");
})
router.post("/addmentor",adminC.addmentor);

router.get("/deletemen",(req,res)=>{
    res.render("deletemen");
})
router.post("/deletemen",adminC.deletemen);

router.get("/updatemen",(req,res)=>{
    res.render("updatemen");
})
router.post("/updatemen",adminC.updatemen);

router.get("/viewment", adminC.viewment);




router.get("/addalumni",(req,res)=>{
    res.render("addalumni");
})
router.post("/addalumni",adminC.addalumni);

router.get("/deletealu",(req,res)=>{
    res.render("deletealu");
})
router.post("/deletealu",adminC.deletealu);

router.get("/updatealu",(req,res)=>{
    res.render("updatealu");
})
router.post("/updatealu",adminC.updatealu);

router.get("/viewalu", adminC.viewalu);

module.exports = router;