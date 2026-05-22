const express = require("express");
const router = express.Router();
const shareConAluC = require("../controllers/shareConAluC");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: "public/uploads/shareConAlus",
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
router.get("/alumni", shareConAluC.alumnishareConAluPage);


// student page
router.get("/student", shareConAluC.studentshareConAluPage);

router.get("/mentor", shareConAluC.mentorshareConAluPage);


// post announcement
router.post(
    "/post",
    upload.single("file"),
    shareConAluC.postshareConAlu
);


router.get(
    "/delete/:id",
    shareConAluC.deleteshareConAlu
);




module.exports = router;