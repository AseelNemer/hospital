import PatientData from "../models/patient.js";
import mongoose from "mongoose";
import { useNavigate } from "react-router-dom";
//let navigate = useNavigate();

export const getPatients = async (req, res) => {
    try {
        const allPatients = await PatientData.find();
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const loginnow = async (req, res) => {
    const { email, password } = req.body;
    PatientData.findOne({ email: email }, (err, user) => {
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





// export const deleteStudent = async (req,res) => {
//     const id = req.params.id;

//     try {
//         await PatientData.findByIdAndRemove(id).exec();
//         res.send('Successfully Deleted!');
//     } catch (error) {
//         console.log(error);
//     }
// } 


export const createPatient = async (req, res) => {
    const patient = req.body;

    const newPatient = new PatientData(patient);
    try {
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}