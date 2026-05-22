const mentorM = require("../model/mentorM");

exports.mentorlog = (req,res)=>{
    const{prn,password} = req.body;
    mentorM.mentorlog({prn,password},(err,result)=>{
        if(err && err.type === "WRONG"){
            return res.render("mentorlog",{
                message:"Incorrect PRN or Password"
            });
        }

        if(err){
            return res.render("mentorlog",{
                message:"something went wrong!"
            });
        }
       
        const mentor = result[0];
        req.session.mentor=mentor;

        req.session.user = {
            prn: mentor.prn,
            role: "mentor",
            name: mentor.name
        };

        return res.redirect("/mentor/mentordash")
    })
}






// exports.mentprofile=(req,res)=>{
//         const mentor = result[0];
// //         result is an array of users/data coming from database
// // result[0] means first matched user

//         // 🔥 Store user in session
//         req.session.mentor = mentor;    //Store user data in session memory

//         // 🔥 Redirect to dashboard
//         return res.redirect("/mentor/mentprofile");
        
// }




// const mentorM = require("../model/mentorM");

// exports.mentorlog = (req,res)=>{
//     const { prn, password } = req.body;

//     mentorM.mentorlog({ prn, password }, (err, result) => {
//         if (err && err.type === "WRONG") {
//             return res.render("mentorlog", {
//                 message: "Incorrect PRN or Password"
//             });
//         }

//         if (err) {
//             return res.render("mentorlog", {
//                 message: "Something went wrong!"
//             });
//         }

//         return res.render("mentorlog", {
//             message: "Login successful!"
//         });
//     });
// };