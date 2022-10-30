import DoctorData from "../models/doctor.js";

export const getDoctors = async (req, res) => {
    try {
        const allDoctors = await DoctorData.find();
        res.status(200).json(allDoctors);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

// export const loginnow = async (req, res) => {
//     const { email, password } = req.body;
//     DoctorData.findOne({ email: email }, (err, user) => {
//         if (user) {
//             if (password === user.password) {
//                     res.send({ message: "login sucess", user: user, statuss:"true" })
//             } else {
//                 res.send({ message: "wrong password", statuss:"false"})
//             }
//         } else {
//             res.send({ message: "not register", statuss:"false" })
//         }
//     })
// }





// export const deleteStudent = async (req,res) => {
//     const id = req.params.id;

//     try {
//         await DoctorData.findByIdAndRemove(id).exec();
//         res.send('Successfully Deleted!');
//     } catch (error) {
//         console.log(error);
//     }
// } 


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