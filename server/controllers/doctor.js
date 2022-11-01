import DoctorData from "../models/doctor.js"; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


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
      const id = req.params.id; 
      console.log(id);
      try {
          const doctor= await DoctorData.findById(id);
          res.status(200).json(doctor);
      } catch (error) {
          console.log(error);
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