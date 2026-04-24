const con = require("./connection");

const mentorlog = (data, callback) => {
    const sql = "SELECT * FROM mentor WHERE prn = ? AND password = ?";
    con.query(sql, [data.prn, data.password], (err, result) => {
        if (err) return callback(err);
       
        if (result.length === 0) {
            return callback({ type: "WRONG" });
        }
        
        return callback(null, result);
    });
};

// const mentprofile = (callback)=>{
//     const sql = "SELECT * FROM mentor WHERE prn = ? AND password = ?";
//     con.query(sql, [data.prn, data.password], (err, result) => {
//         if (err) return callback(err);
       
//         if (result.length === 0) {
//             return callback({ type: "WRONG" });
//         }
        
//         return callback(null, result);
//     });
// }

module.exports = { mentorlog};





