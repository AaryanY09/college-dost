
// module.exports = { addStudent };    //Makes this function usable in routes

//we can also exports multiple functions:-
// const addStudent = (req, res) => {
//     // logic
// };

// const deleteStudent = (req, res) => {
//     // logic
// };

// const updateStudent = (req, res) => {
//     // logic
// };

// module.exports = {
//     addStudent,
//     deleteStudent,
//     updateStudent
// };




const studentM = require("../model/studentM");

exports.signup = (req, res) => {                //This line does NOT strictly require DB names:
    const { prn, name, year, division, password } = req.body;   //req.body → contains form data sent from frontend.   { prn, name, year, division, password } → destructuring
                        //Data object(below)                  Callback function
    studentM.signup({ prn, name, year, division, password }, (err, result) => {         //This line requires names same as database fields:
        //res → Response object from Express (server → client)      result → Data returned from database/model function
        // Duplicate case
        
        if (err && err.type === "DUPLICATE") {
            return res.render("signup", {
                message: "Data already present, please login"
            });
        }       

        //  Other errors
        if (err) {
            return res.render("signup", {
                message: "Something went wrong!"
            });
        }

        // Success
        return res.render("signup", {
            message: "Signup successful! Now login."
        });
    });
};

// Here you are assigning an arrow function to an object property (exports)

// This is called function assignment
// You are defining a function and storing it




exports.login = (req, res) => {
    const { prn, password } = req.body;
    studentM.login({ prn, password }, (err, result) => {
        if (err && err.type === "WRONG") {
            return res.render("studentlog", {
                message: "Incorrect PRN or Password"
            });
        }

        if (err) {
            return res.render("studentlog",{
                message: "Something went wrong!"
            });
        }
        // return res.render("studentlog",{
        //     message: "Login successful!"
        // });

                // ✅ LOGIN SUCCESS
        const user = result[0];
//         result is an array of users/data coming from database
// result[0] means first matched user

        // 🔥 Store user in session
        req.session.user = user;    //Store user data in session memory

        // 🔥 Redirect to dashboard

        req.session.user = {
             prn: user.prn,
             role: "student", // or mentor
             name: user.name,
             year: user.year,
             division: user.division,
             password: user.password
        };

      
        return res.redirect("/student/dashboard");
    });
};



// exports.stdprofile=(req,res)=>{
//         const user = result[0];
//         req.session.user = user;           
//         return res.redirect("/student/stdprofile");      
// }



exports.contact = (req,res)=>{
    const{name,email,message}=req.body;
    studentM.contact({name,email,message},(err,result)=>{
        if(err){
            return res.render("contact",{
                message:"Something went wrong!"
            });
        }
        return res.render("contact",{
            message:"Message sent successfully!"
        });
    });
};



exports.topMentors = (req, res) => {
    studentM.getAllMentors((err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }

        // send data to frontend
        return res.render("topMentors", { data: result });
    });
};


