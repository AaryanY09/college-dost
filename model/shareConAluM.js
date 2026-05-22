const db = require("./connection");



const saveshareConAlu = (data, callback) => {

    const sql = `
    INSERT INTO shareConAlu
    (
        alumni_prn,
        alumni_name,
        title,
        message,
        file_name,
        file_type,
        file_url
    )
    VALUES(?,?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            data.alumni_prn,
            data.alumni_name,
            data.title,
            data.message,
            data.file_name,
            data.file_type,
            data.file_url
        ],
        callback
    );
};




const getAllshareConAlu = (callback) => {

    const sql = `
    SELECT *
    FROM shareConAlu
    ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};



const deleteshareConAlu = (
    shareConAlu_id,
    callback
) => {

    const sql = `
    DELETE FROM shareConAlu
    WHERE shareConAlu_id = ?
    `;

    db.query(
        sql,
        [shareConAlu_id],
        callback
    );
};





module.exports = {
    saveshareConAlu,
    getAllshareConAlu,
    deleteshareConAlu
};








