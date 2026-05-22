const express = require("express");
const router = express.Router();
const annC = require("../controllers/annC");
const multer = require("multer");



const storage = multer.diskStorage({

    destination: "public/uploads/announcements",

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + "-" + file.originalname
        );
    }
});



const upload = multer({ storage });




// middleware for socket io
router.use((req,res,next)=>{
    req.io = req.app.get("io");
    next();
});




// mentor page
router.get("/mentor", annC.mentorAnnouncementPage);



// student page
router.get("/student", annC.studentAnnouncementPage);




// post announcement
router.post(
    "/post",
    upload.single("file"),
    annC.postAnnouncement
);


router.get(
    "/delete/:id",
    annC.deleteAnnouncement
);



module.exports = router;