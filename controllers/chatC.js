const db = require("../model/connection");
const chatM = require("../model/chatM");

// SHOW LIST
exports.showChatList = (req, res) => {
  const user = req.session.user;
  console.log("CHAT ROUTE HIT");

  if (!user) return res.send("Login first");

  if (user.role === "student") {
    db.query("SELECT * FROM mentor", (err, data) => {
      if (err) return res.send(err);
      res.render("chatList", { data, user });
    });
  }

  else if (user.role === "mentor") {    //
    db.query(`
      SELECT DISTINCT s.prn, s.name 
      FROM chats c
      JOIN student s ON s.prn = c.student_prn
      WHERE c.mentor_prn = ?
    `, [user.prn], (err, data) => {
      if (err) return res.send(err);
      res.render("chatList", { data, user });
// Sends data to your .hbs file
// data → student list
// user → current mentor
    });
  }
};









// START CHAT
exports.startChat = (req, res) => {
  const user = req.session.user;

  let studentPrn, mentorPrn;

  if (user.role === "student") {
    studentPrn = user.prn;
    mentorPrn = req.params.prn;
  } else {
    mentorPrn = user.prn;
    studentPrn = req.params.prn;
  }

  db.query(
    "SELECT chat_id FROM chats WHERE student_prn=? AND mentor_prn=?",
    [studentPrn, mentorPrn],
    (err, result) => {
      if (err) return res.send(err);

      if (result.length > 0) {
        return res.redirect("/chats/" + result[0].chat_id);
      }

      db.query(
        "INSERT INTO chats (student_prn, mentor_prn) VALUES (?, ?)",
        [studentPrn, mentorPrn],
        (err, insert) => {
          if (err) return res.send(err);
          res.redirect("/chats/" + insert.insertId);
        }
      );
    }
  );
};

// OPEN CHAT
exports.openChat = (req, res) => {
  const chatId = req.params.id;
  const user = req.session.user;

  chatM.markSeen(chatId, user.prn, () => {
    chatM.getMessages(chatId, (err, messages) => {
      res.render("chatWindow", {
        messages,
        chatId,
        user
      });
    });
  });
};

// req.params is used to get dynamic values (like chatId) from the URL
//req.params is used to get values from the URL