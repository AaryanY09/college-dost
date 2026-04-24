const alumniM = require("../model/alumniM");

exports.alumnilog = (req,res)=>{
    const{prn,password} = req.body;
    alumniM.alumnilog({prn,password},(err,result)=>{
        if(err && err.type === "WRONG"){
            return res.render("alumnilog",{
                message:"Incorrect PRN or Password"
            });
        }

        if(err){
            return res.render("alumnilog",{
                message:"something went wrong!"
            });
        }
        const alumni = result[0];
        req.session.alumni=alumni;
        return res.redirect("/alumni/alumnidash")
    })
}


// exports.aluprofile=(req,res)=>{
//         const alumni = result[0];
// //         result is an array of users/data coming from database
// // result[0] means first matched user

//         // 🔥 Store user in session
//         req.session.alumni = alumni;    //Store user data in session memory

//         // 🔥 Redirect to dashboard
//         return res.redirect("/alumni/aluprofile");
        
// }