const shareConMentM = require("../model/shareConMentM");



const mentorsharePage = (req, res) => {

    shareConMentM.getAllshareConMents((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("shareConMentment", {
            shareConMents: result,
            mentor: req.session.mentor
        });

    });
};





const studentsharePage = (req, res) => {

    shareConMentM.getAllshareConMents((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("shareConMentstd", {
            shareConMents: result,
            user: req.session.user
        });

    });
};






const postshareConMent = (req, res) => {
    let fileData = {
        file_name: null,
        file_type: null,
        file_url: null
    };



    if(req.file){
        fileData.file_name = req.file.filename;
        fileData.file_type = req.file.mimetype;
        fileData.file_url =
        "/uploads/shareConMents/" + req.file.filename;
    }



    const data = {

        mentor_prn: req.session.mentor.prn,
        mentor_name: req.session.mentor.name,

        title: req.body.title,
        message: req.body.message,

        file_name: fileData.file_name,
        file_type: fileData.file_type,
        file_url: fileData.file_url
    };



    shareConMentM.saveshareConMent(data, (err, result) => {

        if(err){
            console.log(err);
            return;
        }

        req.io.emit("new-shareConMent");

        res.redirect("/shareConMent/mentor");
    });

};



const deleteShareConMent = (req, res) => {

    const shareConMent_id =
    req.params.id;

    shareConMentM.deleteShareConMent(
        shareConMent_id,
        (err, result) => {

            if(err){
                console.log(err);
                return;
            }

            req.io.emit(
                "new-shareConMent"
            );

            res.redirect(
                "/shareConMent/mentor"
            );
        }
    );
};




module.exports = {

    mentorsharePage,
    studentsharePage,
    postshareConMent,
    deleteShareConMent
};