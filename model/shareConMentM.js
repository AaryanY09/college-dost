const db = require("./connection");



const saveshareConMent = (data, callback) => {

    const sql = `
    INSERT INTO shareConMents
    (
        mentor_prn,
        mentor_name,
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
            data.mentor_prn,
            data.mentor_name,
            data.title,
            data.message,
            data.file_name,
            data.file_type,
            data.file_url
        ],
        callback
    );
};




const getAllshareConMents = (callback) => {

    const sql = `
    SELECT *
    FROM shareConMents
    ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};



const deleteShareConMent = (
    shareConMent_id,
    callback
) => {

    const sql = `
    DELETE FROM shareConMents
    WHERE shareConMent_id = ?
    `;

    db.query(
        sql,
        [shareConMent_id],
        callback
    );
};





module.exports = {
    saveshareConMent,
    getAllshareConMents,
    deleteShareConMent
};








