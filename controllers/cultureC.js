const cultureM = require("../model/cultureM");



const alumniculturePage = (req, res) => {

    cultureM.getAllculture((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("cultureAlu", {
            culture: result,
            alumni: req.session.alumni
        });

    });
};





const studentculturePage = (req, res) => {

    cultureM.getAllculture((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("cultureStd", {
            culture: result,
            user: req.session.user
        });

    });
};


const mentorculturePage = (req, res) => {

    cultureM.getAllculture((err, result) => {

        if(err){
            console.log(err);
            return;
        }

        res.render("cultureMent", {
            culture: result,
            user: req.session.mentor
        });

    });
};






const postculture = (req, res) => {
    let fileData = {
        file_name: null,
        file_type: null,
        file_url: null
    };



    if(req.file){
        fileData.file_name = req.file.filename;
        fileData.file_type = req.file.mimetype;
        fileData.file_url =
        "/uploads/culture/" + req.file.filename;
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



    cultureM.saveculture(data, (err, result) => {

        if(err){
            console.log(err);
            return;
        }

        req.io.emit("new-culture");

        res.redirect("/culture/alumni");
    });

};



const deleteculture = (req, res) => {

    const culture_id =
    req.params.id;

    cultureM.deleteculture(
        culture_id,
        (err, result) => {

            if(err){
                console.log(err);
                return;
            }

            req.io.emit(
                "new-culture"
            );

            res.redirect(
                "/culture/alumni"
            );
        }
    );
};




module.exports = {
    alumniculturePage,
    studentculturePage,
    mentorculturePage,
    postculture,
    deleteculture
};