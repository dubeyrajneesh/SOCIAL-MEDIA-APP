// const UserModel = require('../Modeks/User_Model')
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require('../Config');

// const signupcontroller = (req,res)=>{

//     const { fullname, email, password , profileImg , mobile} = req.body;
//     if (!fullname || !password || !email) {
//         return res.status(400).json({ error: "One or more mandatory fields are empty" });
//     }
//     UserModel.findOne({ email: email })
//         .then((userInDB) => {
//             if (userInDB) {
//                 return res.status(500).json({ error: "User with this email already registered" });
//             }
//             bcryptjs.hash(password, 16)
//                 .then((hashedPassword) => {
//                     const user = new UserModel({ fullname, email, password: hashedPassword , mobile,profileImg  });
//                     user.save()
//                         .then((newUser) => {
//                             res.status(201).json({ result: "User Signed up Successfully!" });
//                         })
//                         .catch((err) => {
//                             console.log(err);
//                         })
//                 }).catch((err) => {
//                     console.log(err);
//                 })
//         })
//         .catch((err) => {
//             console.log(err);
//         })



   

// }

// module.exports= signupcontroller ;