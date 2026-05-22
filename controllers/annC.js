const annM = require("../model/annM");



const mentorAnnouncementPage = (req, res) => {

    annM.getAllAnnouncements((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("mentorAnnouncement", {
            announcements: result,
            mentor: req.session.mentor
        });

    });
};





const studentAnnouncementPage = (req, res) => {

    annM.getAllAnnouncements((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("studentAnnouncement", {
            announcements: result,
            user: req.session.user
        });

    });
};






const postAnnouncement = (req, res) => {

    //Creates an object named:fileData
    let fileData = {
        file_name: null,
        file_type: null,
        file_url: null
    };
    //So default values are kept null,bczmentor can post only filename or type or fileurl.

    //if(req.file): Did user upload a file?
    if(req.file){

        fileData.file_name = req.file.filename;             //mimetype , filename are predefined multer properties
        fileData.file_type = req.file.mimetype;
        fileData.file_url =
        "/uploads/announcements/" + req.file.filename;      //Create path/url for downloading file.
    }
//MIME = Multipurpose Internet Mail Extensions  used to identify file types on the internet. Examples: "image/png", "application/pdf", "text/plain" etc.


    const data = {

        mentor_prn: req.session.mentor.prn,
        mentor_name: req.session.mentor.name,

        title: req.body.title,
        message: req.body.message,
        //only body is used instead of other words/keywords bcz in form input name is title and message,so we can access them using req.body.title and req.body.message 

        file_name: fileData.file_name,
        file_type: fileData.file_type,
        file_url: fileData.file_url
    };

//mentor_prn, mentor_name, title, message, file_name, file_type, file_url comes from backend data

    annM.saveAnnouncement(data, (err, result) => {

        if(err){
            console.log(err);
            return;
        }

        req.io.emit("new-announcement");

        res.redirect("/announcement/mentor");
    });

};





const deleteAnnouncement = (req, res) => {

    const announcement_id =
    req.params.id;

    annM.deleteAnnouncement(
        announcement_id,
        (err, result) => {

            if(err){
                console.log(err);
                return;
            }

            req.io.emit(
                "new-announcement"
            );

            res.redirect(
                "/announcement/mentor"
            );
        }
    );
};




module.exports = {

    mentorAnnouncementPage,
    studentAnnouncementPage,
    postAnnouncement,
    deleteAnnouncement
};