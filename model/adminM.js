
const con = require("./connection");


const adminlog = (data, callback) => {
    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
    con.query(sql, [data.username, data.password], (err, result) => {
        if (err) return callback(err);
    
        if (result.length === 0) {
            return callback({ type: "WRONG" });
        }
   
        return callback(null, result);
    });
}






const addstd = (data, callback) => {

    //  Step 1: Check if PRN already exists
    const checkSql = "SELECT * FROM student WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

        // If already exists
        if (result.length > 0) {
            return callback({ type: "DUPLICATE" });
        }

        // Step 2: Insert new user
        const insertSql = "INSERT INTO student (prn, name, year, division) VALUES (?, ?, ?, ?)";

        con.query(insertSql, 
            [data.prn, data.name, data.year, data.division], 
            callback
        );
    });
};



const updatestd = (data, callback) => {

    //  Step 1: Check if PRN already exists
    const checkSql = "SELECT * FROM student WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

        // If already exists
        if (result.length === 0) {
            return callback({ type: "NOT_FOUND" });
        }

        // Step 2: Insert new user
        const updateSql = "UPDATE student SET name = ?, year = ?, division = ? WHERE prn = ?";

        con.query(updateSql, 
            [data.name, data.year, data.division,data.prn], 
            callback
        );
    });
};


const deletestd = ({ prn, name, year }, callback) => {

    const sql = "DELETE FROM student WHERE prn = ? AND name = ? AND year = ?";

    con.query(sql, [prn, name, year], (err, result) => {
        if (err) return callback(err, null);

        return callback(null, result);
    });
};



const getAllStudents = (callback) => {
    const sql = "SELECT * FROM student";

    con.query(sql, (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
    });
};


















const addmentor = (data, callback) => {

    const checkSql = "SELECT * FROM mentor WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

       
        if (result.length > 0) {
            return callback({ type: "DUPLICATE" });
        }


        const insertSql = "INSERT INTO mentor(prn, password, name, division) VALUES (?, ?, ?, ?)";

        con.query(insertSql, 
            [data.prn,data.password, data.name, data.division], 
            callback
        );
    });
};


const deletemen = ({ prn, name }, callback) => {

    const sql = "DELETE FROM mentor WHERE prn = ? AND name = ?";

    con.query(sql, [prn, name], (err, result) => {
        if (err) return callback(err, null);

        return callback(null, result);
    });
};

const updatemen = (data, callback) => {

    //  Step 1: Check if PRN already exists
    const checkSql = "SELECT * FROM mentor WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

        // If already exists
        if (result.length === 0) {
            return callback({ type: "NOT_FOUND" });
        }

        // Step 2: Insert new user
        const updateSql = "UPDATE mentor SET password=?,name = ?, division = ? WHERE prn = ?";

        con.query(updateSql, 
            [data.password, data.name, data.division,data.prn], 
            callback
        );
    });
};


const getAllMent = (callback) => {
    const sql = "SELECT * FROM mentor";

    con.query(sql, (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
    });
};







const addalumni = (data, callback) => {

    const checkSql = "SELECT * FROM alumni WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

       
        if (result.length > 0) {
            return callback({ type: "DUPLICATE" });
        }


        const insertSql = "INSERT INTO alumni(prn, name, company,passout_year,password) VALUES (?, ?, ?, ?,?)";

        con.query(insertSql, 
            [data.prn, data.name, data.company,data.passout_year,data.password], 
            callback
        );
    });
};


const deletealu = ({ prn, name }, callback) => {

    const sql = "DELETE FROM alumni WHERE prn = ? AND name = ?";

    con.query(sql, [prn, name], (err, result) => {
        if (err) return callback(err, null);

        return callback(null, result);
    });
};


const updatealu = (data, callback) => {

    const checkSql = "SELECT * FROM alumni WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

       
        if (result.length === 0) {
            return callback({ type: "NOT_FOUND" });
        }


        const insertSql = "UPDATE alumni SET name=?,company = ?, passout_year = ?,password=? WHERE prn = ?";

        con.query(insertSql, 
            [data.name, data.company,data.passout_year,data.password,data.prn], 
            callback
        );
    });
};

const getAllAlu = (callback) => {
    const sql = "SELECT * FROM alumni";

    con.query(sql, (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
    });
};




module.exports = { adminlog, getAllStudents,addstd,addmentor,addalumni,deletestd,deletemen,deletealu,updatestd,updatemen,updatealu,getAllMent,getAllAlu };