const adminM = require("../model/adminM");



exports.adminlog = (req, res) => {
    const { username , password } = req.body;
    adminM.adminlog({ username, password }, (err, result) => {
        if (err && err.type === "WRONG") {
            return res.render("adminlog", {
                message: "Incorrect username or Password"
            });
        }

        if (err) {
            return res.render("adminlog",{
                message: "Something went wrong!"
            });
        }
        return res.render("adminP",{
            message: "Login successful!"
        });
    });
};






exports.addstd = (req, res) => {
    const { prn, name, year, division} = req.body;

    adminM.addstd({ prn, name, year, division }, (err, result) => {

        // Duplicate case
        if (err && err.type === "DUPLICATE") {
            return res.render("addstd", {
                message: "Data already present, please login"
            });
        }

        //  Other errors
        if (err) {
            return res.render("addstd", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("addstd", {
            message: "Student added successfully!"
        });
    });
};


exports.updatestd = (req, res) => {
    const { prn, name, year, division} = req.body;

    adminM.updatestd({ prn, name, year, division }, (err, result) => {

        // Duplicate case
        if (err && err.type === "NOT_FOUND") {
            return res.render("updatestd", {
                message: "Student Not Found"
            });
        }

        //  Other errors
        if (err) {
            return res.render("updatestd", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("updatestd", {
            message: "Student updated successfully!"
        });
    });
};


exports.deletestd = (req, res) => {
    const { prn, name, year } = req.body;

    adminM.deletestd({ prn, name, year }, (err, result) => {

        // If no matching record found
        if (!err && result.affectedRows === 0) {
            return res.render("deletestd", {
                message: "No such student found!"
            });
        }

        // Other errors
        if (err) {
            return res.render("deletestd", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("deletestd", {
            message: "Student deleted successfully!"
        });
    });
};



exports.viewData = (req, res) => {
    adminM.getAllStudents((err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }

        // send data to frontend
        return res.render("viewdata", { data: result });
    });
};
















exports.addmentor = (req, res) => {
    const { prn,password,name,division} = req.body;

    adminM.addmentor({ prn,password,name, division }, (err, result) => {

        // Duplicate case
        if (err && err.type === "NOT_FOUND") {
            return res.render("addmentor", {
                message: "Mentor Not Found"
            });
        }

        //  Other errors
        if (err) {
            return res.render("addmentor", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("addmentor", {
            message: "Mentor added successfully!"
        });
    });
};


exports.deletemen = (req, res) => {
    const { prn, name } = req.body;

    adminM.deletemen({ prn, name }, (err, result) => {

        // If no matching record found
        if (!err && result.affectedRows === 0) {
            return res.render("deletemen", {
                message: "No such mentor found!"
            });
        }

        // Other errors
        if (err) {
            return res.render("deletemen", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("deletemen", {
            message: "Mentor deleted successfully!"
        });
    });
};


exports.updatemen = (req, res) => {
    const { prn,password,name,division} = req.body;

    adminM.updatemen({ prn,password,name, division }, (err, result) => {

        // Duplicate case
        if (err && err.type === "NOT_FOUND") {
            return res.render("updatemen", {
                message: "Mentor not found"
            });
        }

        //  Other errors
        if (err) {
            return res.render("updatemen", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("updatemen", {
            message: "Mentor updated successfully!"
        });
    });
};


exports.viewment = (req, res) => {
    adminM.getAllMent((err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }

        // send data to frontend
        return res.render("viewment", { data: result });
    });
};







exports.addalumni = (req, res) => {
    const { prn,name,company,passout_year,password} = req.body;

    adminM.addalumni({ prn,name,company,passout_year,password }, (err, result) => {

        // Duplicate case
        if (err && err.type === "DUPLICATE") {
            return res.render("addalumni", {
                message: "Data already present, please login"
            });
        }

        //  Other errors
        if (err) {
            return res.render("addalumni", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("addalumni", {
            message: "Alumni added successfully!"
        });
    });
};



exports.deletealu = (req, res) => {
    const { prn, name } = req.body;

    adminM.deletealu({ prn, name }, (err, result) => {

        // If no matching record found
        if (!err && result.affectedRows === 0) {
            return res.render("deletealu", {
                message: "No such alumni found!"
            });
        }

        // Other errors
        if (err) {
            return res.render("deletealu", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("deletealu", {
            message: "Alumni deleted successfully!"
        });
    });
};


exports.updatealu = (req, res) => {
    const { prn,name,company,passout_year,password} = req.body;

    adminM.updatealu({ prn,name,company,passout_year,password }, (err, result) => {

        // Duplicate case
        if (err && err.type === "NOT_FOUND") {
            return res.render("updatealu", {
                message: "Alumni Not Found"
            });
        }

        //  Other errors
        if (err) {
            return res.render("updatealu", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("updatealu", {
            message: "Alumni updated successfully!"
        });
    });
};


exports.viewalu = (req, res) => {
    adminM.getAllAlu((err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }

        // send data to frontend
        return res.render("viewalu", { data: result });
    });
};