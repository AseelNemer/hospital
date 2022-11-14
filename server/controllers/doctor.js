import DoctorData from "../models/doctor.js"; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import PatientData from "../models/patient.js";


export const getDoctors = async (req, res) => {
    try {
        const allDoctors = await DoctorData.find();
        res.status(200).json(allDoctors);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const loginnow = async (req, res) => {
    const { email, password } = req.body;
    DoctorData.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                    res.send({ message: "login sucess", user: user, statuss:"true" })
            } else {
                res.send({ message: "wrong password", statuss:"false"})
            }
        } else {
            res.send({ message: "not register", statuss:"false" })
        }
    })
}

// export const loginnow=async (req, res) => {
//     const { email, password } = req.body;
//     const user = await DoctorData.findOne({ email });
//     if (!user) {
//       return res.json({ error: "User Not found" });
//     }
//     // if (await bcrypt.compare(password, user.password)) {
//     if (password === user.password) {
//       const token = jwt.sign({ email: user.email }, JWT_SECRET);
//       if (res.status(201)) {
//         return res.json({ status: "ok", data: token });
//       } else {
//         return res.json({ error: "error" });
//       }
//     }
//     res.json({ status: "error", error: "InvAlid Password" });
//   };



// export const deleteStudent = async (req,res) => {
//     const id = req.params.id;

//     try {
//         await DoctorData.findByIdAndRemove(id).exec();
//         res.send('Successfully Deleted!');
//     } catch (error) {
//         console.log(error);
//     }
// } 

export const showDoctor =async (req,res) => {
    let flag=0
    let arr =[];
      const id = req.params.id; 

      let doctor;
      try {
           doctor= await DoctorData.findById(id);
                                                  
      } catch (error) {
          console.log(error);
      }
      try 
      {
        const allpatients = await PatientData.find();
        
        //console.log("patin:", allpatients[0]._id);
        
        for (let index = 0; index < doctor.sicks.length; index++) {
            flag=0;
            for (let i = 0; i < allpatients.length && flag==0; i++) {
                //console.log(" doctor is : ", doctor.sicks[index],"  sick is : ",allpatients[i]._id,"\n" );
                if(JSON.stringify(doctor.sicks[index])===JSON.stringify(allpatients[i]._id)){
                    
                    //console.log("ss");

                    arr.push(allpatients[i])
                    flag=1;
                }

                
            }
                
            
        }
        const par={"a":arr,"b":doctor}
        res.status(200).json(par);
      } catch (error) 
      {
        res.status(404).json({ message: error.message })
      }
  } 

export const createDoctor = async (req, res) => {
    const doctor = req.body;

    const newDoctor = new DoctorData(doctor);
    try {
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
}


// export const showDoctor = async (req, res) => {
//     const { token } = req.body;
//     try {
//       const user = jwt.verify(token, JWT_SECRET);
//       console.log(user);
  
//       const useremail = user.email;
//       DoctorData.findOne({ email: useremail })
//         .then((data) => {
//           // res.send({ status: "ok", data: data });
//           res.status(200).json(data);
//         })
//         .catch((error) => {
//           res.send({ status: "error", data: error });
//         });
//     } catch (error) {}
//   };

// import DoctorData from "../models/doctor.js"; 
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';



// const JWT_SECRET =
//   "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


// export const getDoctors = async (req, res) => {
//     try {
//         const allDoctors = await DoctorData.find();
//         res.status(200).json(allDoctors);
//     } catch (error) {
//         res.status(404).json({ message: error.message})
//     }
// }

// export const loginnow = async (req, res) => {
//     const { email, password } = req.body;
//     DoctorData.findOne({ email: email }, (err, user) => {
//         if (user) {
//             if (password === user.password) {
//                 const _token = jwt.sign({ email: 'vn' }, 'PRIV_123')
//                 res.send({
//                     message: "login sucess",
//                     user: user,
//                     statuss: "true",
//                     token: _token,
//                     type: user.type
//                 })
//             } else {
//                 res.send({ message: "wrong password", statuss:"false"})
//             }
//         } else {
//             res.send({ message: "not register", statuss:"false" })
//         }
//     })
// }


// // export const loginnow=async (req,res) =>{
// //     const userLoggingIn=req.pody;
// //     DoctorData.findOne({email : userLoggingIn.email})
// //     .then(dbUser => {
// //         if(!dbUser){
// //             return res.json({
// //                 message:"Invaled Email or Password"
// //             })
// //         }
// //         bcrypt.compare(userLoggingIn.password, dbUser.password)
// //         .then(isCorrect => {
// //             if(isCorrect){
// //                 const payload={
// //                     id:dbUser._id,  
// //                     email :dbUser.email,
// //                 }
// //                 jwt.sign(
// //                     payload,
// //                     process.env.JWT_SECRET,
// //                     {expiresIn:86400},
// //                     (err, token) => {
// //                         if(err) return res.json({message: err})
// //                         return res.json({
// //                             message: "Success",
// //                             token: "Bearer " + token
// //                         })
// //                     }
// //                 )
// //             }else {
// //                 return res.json({
// //                     message: "Invaled Email or Password"
// //                 })
// //             }
// //         })
// //     })
// // }

// // export const loginnow=async  (request, response) => {
// //     // check if email exists
// //     DoctorData.findOne({ email: request.body.email })
  
// //       // if email exists
// //       .then((user) => {
// //         // compare the password entered and the hashed password found
// //         bcrypt
// //           .compare(request.body.password, user.password)
  
// //           // if the passwords match
// //           .then((passwordCheck) => {
  
// //             // check if password matches
// //             if(!passwordCheck) {
// //               return response.status(400).send({
// //                 message: "Passwords does not match",
// //                 error,
// //               });
// //             }
  
// //             //   create JWT token
// //             const token = jwt.sign(
// //               {
// //                 userId: user._id,
// //                 userEmail: user.email,
// //               },
// //               "RANDOM-TOKEN",
// //               { expiresIn: "24h" }
// //             );
  
// //             //   return success response
// //             response.status(200).send({
// //               message: "Login Successful",
// //               email: user.email,
// //               token,
// //             });
// //           })
// //           // catch error if password does not match
// //           .catch((error) => {
// //             response.status(400).send({
// //               message: "Passwords does not match",
// //               error,
// //             });
// //           });
// //       })
// //       // catch error if email does not exist
// //       .catch((e) => {
// //         response.status(404).send({
// //           message: "Email not found",
// //           e,
// //         });
// //       });
// //   };
  


// // export const deleteStudent = async (req,res) => {
// //     const id = req.params.id;

// //     try {
// //         await DoctorData.findByIdAndRemove(id).exec();
// //         res.send('Successfully Deleted!');
// //     } catch (error) {
// //         console.log(error);
// //     }
// // } 

// export const showDoctor =async (req,res) => {
//       const id = req.params.id; 
//       console.log(id);
//       try {
//           const doctor= await DoctorData.findById(id);
//           res.status(200).json(doctor);
//       } catch (error) {
//           console.log(error);
//       }
//   } 

// // export const showDoctor =async (req,res) => {
// //     DoctorData.findOne({ email: req.decoded.email }, function (err, user) {
// //         if (err) throw err;
// //         if (!user) {
// //           res.json({ success: false, message: "not found" });
// //         } else {
// //           res.json({ success: true, message: user });
// //         }
// //       });
// //     }

// export const createDoctor = async (req, res) => {
//     const doctor = req.body;

//     const newDoctor = new DoctorData(doctor);
//     try {
//         await newDoctor.save();
//         res.status(201).json(newDoctor);
//     } catch (error) {
//         console.log(error);
//         res.status(409).json({ message: error.message })
//     }
// }


// // export const showDoctor = async (req, res) => {
// //     const { token } = req.body;
// //     try {
// //       const user = jwt.verify(token, JWT_SECRET);
// //       console.log(user);
  
// //       const useremail = user.email;
// //       DoctorData.findOne({ email: useremail })
// //         .then((data) => {
// //           // res.send({ status: "ok", data: data });
// //           res.status(200).json(data);
// //         })
// //         .catch((error) => {
// //           res.send({ status: "error", data: error });
// //         });
// //     } catch (error) {}
// //   };