


const db = require("./connection");

exports.getMessages = (chatId, callback) => {
  db.query(
    "SELECT * FROM messages WHERE chat_id=? AND is_deleted=0",
    [chatId],
    callback
  );
};


exports.saveMessage = (data, callback) => {
  db.query(
    "INSERT INTO messages (chat_id, sender_prn, message, file_url, message_type) VALUES (?, ?, ?, ?, ?)",
    [data.chatId, data.senderPrn, data.message, data.fileUrl, data.message_type],
    callback
  );
};



exports.markSeen = (chatId, userPrn, callback) => {
  db.query(
    "UPDATE messages SET is_seen=1 WHERE chat_id=? AND sender_prn!=?",
    [chatId, userPrn],
    callback
  );
};



exports.addNotification = (data) => {
  db.query(
    "INSERT INTO notifications (user_prn, chat_id) VALUES (?, ?)",
    [data.senderPrn, data.chatId]
  );
};