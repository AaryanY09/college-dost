const db = require("./connection");



const saveculture = (data, callback) => {

    const sql = `
    INSERT INTO culture
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




const getAllculture = (callback) => {

    const sql = `
    SELECT *
    FROM culture
    ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};



const deleteculture = (
    culture_id,
    callback
) => {

    const sql = `
    DELETE FROM culture
    WHERE culture_id = ?
    `;

    db.query(
        sql,
        [culture_id],
        callback
    );
};





module.exports = {
    saveculture,
    getAllculture,
    deleteculture
};








