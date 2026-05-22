const db = require("../model/connection");
const chatM = require("../model/achatM");

// SHOW LIST
exports.showChatList = (req, res) => {
  const user = req.session.user;
  console.log("CHAT ROUTE HIT");

  if (!user) return res.send("Login first");

  if (user.role === "student") {
    db.query("SELECT * FROM mentor", (err, data) => {
      if (err) return res.send(err);
      res.render("achatList", { data, user });
    });
  }

  else if (user.role === "mentor") {    //
    db.query(`
      SELECT DISTINCT s.prn, s.name 
      FROM Achats c
      JOIN student s ON s.prn = c.astudent_prn
      WHERE c.amentor_prn = ?
    `, [user.prn], (err, data) => {
      if (err) return res.send(err);
      res.render("achatList", { data, user });
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
    "SELECT achat_id FROM achats WHERE astudent_prn=? AND amentor_prn=?",
    [studentPrn, mentorPrn],
    (err, result) => {
      if (err) return res.send(err);

      if (result.length > 0) {
        return res.redirect("/achats/" + result[0].achat_id);
      }

      db.query(
        "INSERT INTO Achats (astudent_prn, amentor_prn) VALUES (?, ?)",
        [studentPrn, mentorPrn],
        (err, insert) => {
          if (err) return res.send(err);
          res.redirect("/achats/" + insert.insertId);
        }
      );
    }
  );
};

// OPEN CHAT
exports.openChat = (req, res) => {
  const achatId = req.params.id;
  const user = req.session.user;

  chatM.markSeen(achatId, user.prn, () => {
    chatM.getMessages(achatId, (err, messages) => {
      res.render("achatWindow", {
        messages,
        achatId: achatId,
        user
      });
    });
  });
};

// req.params is used to get dynamic values (like chatId) from the URL
//req.params is used to get values from the URL