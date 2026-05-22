


const db = require("./connection");

exports.getMessages = (chatId, callback) => {
  db.query(
    "SELECT * FROM Amessages WHERE achat_id=? AND ais_deleted=0",
    [chatId],
    callback
  );
};


exports.saveMessage = (data, callback) => {
  db.query(
    "INSERT INTO Amessages (achat_id, asender_prn, amessage, afile_url, amessage_type) VALUES (?, ?, ?, ?, ?)",
    [data.achatId, data.senderPrn, data.message, data.fileUrl, data.message_type],
    callback
  );
};



exports.markSeen = (chatId, userPrn, callback) => {
  db.query(
    "UPDATE Amessages SET ais_seen=1 WHERE achat_id=? AND asender_prn!=?",
    [chatId, userPrn],
    callback
  );
};



exports.addNotification = (data) => {
 db.query(
  "INSERT INTO Anotifications (auser_prn, achat_id) VALUES (?, ?)",
  [data.senderPrn, data.achatId]
);
};