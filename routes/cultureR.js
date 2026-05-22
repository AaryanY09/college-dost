const express = require("express");
const router = express.Router();
const cultureC = require("../controllers/cultureC");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: "public/uploads/culture",
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


// alumni page
router.get("/alumni", cultureC.alumniculturePage);


// student page
router.get("/student", cultureC.studentculturePage);

router.get("/mentor", cultureC.mentorculturePage);


// post announcement
router.post(
    "/post",
    upload.single("file"),
    cultureC.postculture
);


router.get(
    "/delete/:id",
    cultureC.deleteculture
);




module.exports = router;