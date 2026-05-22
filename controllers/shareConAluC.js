const shareConAluM = require("../model/shareConAluM");



const alumnishareConAluPage = (req, res) => {

    shareConAluM.getAllshareConAlu((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("shareConAluAlu", {
            shareConAlu: result,
            alumni: req.session.alumni
        });

    });
};





const studentshareConAluPage = (req, res) => {

    shareConAluM.getAllshareConAlu((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("shareConAluStd", {
            shareConAlu: result,
            user: req.session.user
        });

    });
};


const mentorshareConAluPage = (req, res) => {

    shareConAluM.getAllshareConAlu((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("shareConAluMent", {
            shareConAlu: result,
            user: req.session.mentor
        });

    });
};






const postshareConAlu = (req, res) => {
    let fileData = {
        file_name: null,
        file_type: null,
        file_url: null
    };



    if(req.file){
        fileData.file_name = req.file.filename;
        fileData.file_type = req.file.mimetype;
        fileData.file_url =
        "/uploads/shareConAlus/" + req.file.filename;
    }



    const data = {

        alumni_prn: req.session.alumni.prn,
        alumni_name: req.session.alumni.name,

        title: req.body.title,
        message: req.body.message,

        file_name: fileData.file_name,
        file_type: fileData.file_type,
        file_url: fileData.file_url
    };



    shareConAluM.saveshareConAlu(data, (err, result) => {

        if(err){
            console.log(err);
            return;
        }

        req.io.emit("new-shareConAlu");

        res.redirect("/shareConAlu/alumni");
    });

};



const deleteshareConAlu = (req, res) => {

    const shareConAlu_id =
    req.params.id;

    shareConAluM.deleteshareConAlu(
        shareConAlu_id,
        (err, result) => {

            if(err){
                console.log(err);
                return;
            }

            req.io.emit(
                "new-shareConAlu"
            );

            res.redirect(
                "/shareConAlu/alumni"
            );
        }
    );
};




module.exports = {
    alumnishareConAluPage,
    studentshareConAluPage,
    mentorshareConAluPage,
    postshareConAlu,
    deleteshareConAlu
};