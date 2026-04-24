//we are here from studentC controllers


const con = require("./connection");

const signup = (data, callback) => {

    //  Step 1: Check if PRN already exists
    const checkSql = "SELECT * FROM student WHERE prn = ?";

    con.query(checkSql, [data.prn], (err, result) => {
        if (err) return callback(err);

        // If already exists
        if (result.length > 0) {
            return callback({ type: "DUPLICATE" });
        }

        // Step 2: Insert new user
        const insertSql = "INSERT INTO student (prn, name, year, division, password) VALUES (?, ?, ?, ?, ?)";

        con.query(insertSql, 
            [data.prn, data.name, data.year, data.division, data.password], 
            callback
        );
    });
};





const login = (data, callback) => {
    const sql = "SELECT * FROM student WHERE prn = ? AND password = ?";
    con.query(sql, [data.prn, data.password], (err, result) => {
        if (err) return callback(err);
        //  If no user found
        
        if (result.length === 0) {
            return callback({ type: "WRONG" });
        }
        //  Login success
        return callback(null, result);
    });
};


// const stdprofile=(callback)=>{
//       const sql = "SELECT * FROM student WHERE prn = ? AND password = ?";
//     con.query(sql, [data.prn, data.password], (err, result) => {
//         if (err) return callback(err);
//         //  If no user found
        
//         if (result.length === 0) {
//             return callback({ type: "WRONG" });
//         }
//         //  Login success
//         return callback(null, result);
//     });
// }
//if we exported seperatly,exports overwrite and exportslast function written



const contact = (data,callback)=>{
     const sql = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
     con.query(sql,[data.name,data.email,data.message],(err,result)=>{
        if(err) return callback(err);

        return callback(null,result);
     });
};



module.exports = { signup,login,contact };