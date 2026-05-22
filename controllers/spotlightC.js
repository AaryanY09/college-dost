const spotlightM = require("../model/spotlightM");



const alumnispotlightPage = (req, res) => {

    spotlightM.getAllSpotlights((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("spotlightAlu", {
            spotlights: result,
            alumni: req.session.alumni
        });

    });
};





const studentspotlightPage = (req, res) => {

    spotlightM.getAllSpotlights((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("spotlightStd", {
            spotlights: result,
            user: req.session.user
        });

    });
};


const mentorspotlightPage = (req, res) => {

    spotlightM.getAllSpotlights((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("spotlightMent", {
            spotlights: result,
            user: req.session.mentor
        });

    });
};






const postspotlight = (req, res) => {
    let fileData = {
        file_name: null,
        file_type: null,
        file_url: null
    };



    if(req.file){
        fileData.file_name = req.file.filename;
        fileData.file_type = req.file.mimetype;
        fileData.file_url =
        "/uploads/spotlights/" + req.file.filename;
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



    spotlightM.savespotlight(data, (err, result) => {

        if(err){
            console.log(err);
            return;
        }

        req.io.emit("new-spotlight");

        res.redirect("/spotlight/alumni");
    });

};



const deletespotlight = (req, res) => {

    const spotlight_id =
    req.params.id;

    spotlightM.deletespotlight(
        spotlight_id,
        (err, result) => {

            if(err){
                console.log(err);
                return;
            }

            req.io.emit(
                "new-spotlight"
            );

            res.redirect(
                "/spotlight/alumni"
            );
        }
    );
};




module.exports = {
    alumnispotlightPage,
    studentspotlightPage,
    mentorspotlightPage,
    postspotlight,
    deletespotlight
};