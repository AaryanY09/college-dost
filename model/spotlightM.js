const db = require("./connection");



const savespotlight = (data, callback) => {

    const sql = `
    INSERT INTO spotlights
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




const getAllSpotlights = (callback) => {

    const sql = `
    SELECT *
    FROM spotlights
    ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};



const deletespotlight = (
    spotlight_id,
    callback
) => {

    const sql = `
    DELETE FROM spotlights
    WHERE spotlight_id = ?
    `;

    db.query(
        sql,
        [spotlight_id],
        callback
    );
};





module.exports = {
    savespotlight,
    getAllSpotlights,
    deletespotlight
};








