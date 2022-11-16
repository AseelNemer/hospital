import DoctorData from "../models/doctor.js"; 
import ScheduleData from '../models/schedule.js';
import PatientData from '../models/patient.js'


export const getSchedule = async (req, res) => {
    try {
        console.log("schedule : ",req.body);
        const allSchedules = await ScheduleData.find();
        res.status(200).json(allSchedules);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



export const showSchedule =async (req,res) => {
    const id = req.params.id; 
    try {
        const schedule= await ScheduleData.findById(id);
        res.status(200).json(schedule);
    } catch (error) {
        console.log(error);
    }
} 


export const createSchedule = async (req, res) => {
    const s1 = req.body;
    const iddoctor=s1.doctorID;
    const idpatient=s1.patientID;
    const newSchedule = new ScheduleData(s1);
    try {
        await newSchedule.save();

        //res.status(201).json(newPatient);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

    DoctorData.findOne({ _id:iddoctor }, async(err, user) => {
        if (user) {
             user.schedule.push(newSchedule);
             await user.save();
            //  res.send({ message: "added schedule success", user: user, statuss:"true" })
            }
    })

    PatientData.findOne({ _id:idpatient }, async(err, user) => {
        if (user) {
             user.schedule.push(newSchedule);
             await user.save();
            //  res.send({ message: "added schedule success", user: user, statuss:"true" })
            }
    })
}