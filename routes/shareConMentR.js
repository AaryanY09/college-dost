const express = require("express");
const router = express.Router();
const shareConMentC = require("../controllers/shareConMentC");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: "public/uploads/shareConMents",
    filename: (req, file, cb) => {
        cb(
            null,
            Date.now() + "-" + file.originalname
        );
    }
});
//cb is a function used to send result (like filename) back to Multer after processing.

//creates an object (upload) that can handle file uploads.
const upload = multer({ storage });


// middleware for socket io     router.use(...):runs for every route inside this router
router.use((req,res,next)=>{
    req.io = req.app.get("io");
    next();
});
//app.set("io", io):Express stores Socket.IO globally inside app
//next():continue to next middleware / route  eg.,routes like /post,/delete


// mentor page
router.get("/mentor", shareConMentC.mentorsharePage);


// student page
router.get("/student", shareConMentC.studentsharePage);


// post announcement
router.post(
    "/post",
    upload.single("file"),
    shareConMentC.postshareConMent
);


router.get(
    "/delete/:id",
    shareConMentC.deleteShareConMent
);




module.exports = router;