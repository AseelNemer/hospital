import PatientData from "../models/patient.js";
import DoctorData from "../models/doctor.js"; 
import ComplaintData from "../models/complaint.js"; 


import mongoose from "mongoose";
import { useNavigate } from "react-router-dom";
//let navigate = useNavigate();
import express from 'express';

export const getPatients = async (req, res) => {
    try {
        console.log("patt",req.body);
        const allPatients = await PatientData.find();
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const loginpat = async (req, res) => {
    const { email, password } = req.body;
    console.log("the user is in", req.body);
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

export const showPatient =async (req,res) => {
    const id = req.params.id; 
    //console.log(id);
    try {
        const patient= await PatientData.findById(id);
        res.status(200).json(patient);
    } catch (error) {
        console.log(error);
    }
} 


export const createPatient = async (req, res) => {
    const patient = req.body;
    const iddoctor=req.body.myDoctor;
    const emailpatient=req.body.email;
    //console.log("patient :", patient);

    const newPatient = new PatientData(patient);
    try {
        await newPatient.save();
        //res.status(201).json(newPatient);
    } catch (error) {
        // console.log(newPatient);
        res.status(409).json({ message: error.message })
    }

    let idpatient,dic;
    PatientData.findOne({ email: emailpatient }, (err, user) => {
        if (user) {
             idpatient =user._id
        }
    })


    
    DoctorData.findOne({ _id: iddoctor }, async (err, user) => {
        if (user) {
           
            user.sicks.push(newPatient);
            await user.save();
            // res.send({ message: "login sucess", user: user, statuss:"true" })

            //res.status(201).json(newPatient);

        }
    })
}

export const createcomplaint =async (req,res) => {
   const idpat = req.body.idpatient; 
    const complaint=req.body
    const newComplaintt = new ComplaintData(complaint);
    console.log("complaint ::",complaint);

    

    PatientData.findOne({ _id: idpat },async(err,user)=>{
        if (user) {
            user.myComplaints.push(newComplaintt);
            await user.save();

        }
    })

    try 
    {
        await newComplaintt.save();
    }

     catch (error)
    {
        console.log("i am in error",error);
        res.status(409).json({ message: error.message })

    }

      

   

}


