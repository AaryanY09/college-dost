const db = require("./connection");



const saveAnnouncement = (data, callback) => {

    const sql = `
    INSERT INTO announcements
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




const getAllAnnouncements = (callback) => {

    const sql = `
    SELECT *
    FROM announcements
    ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};



const deleteAnnouncement = (
    announcement_id,
    callback
) => {

    const sql = `
    DELETE FROM announcements
    WHERE announcement_id = ?
    `;

    db.query(
        sql,
        [announcement_id],
        callback
    );
};





module.exports = {
    saveAnnouncement,
    getAllAnnouncements,
    deleteAnnouncement
};







