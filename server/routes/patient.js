import express from 'express';
import { getDoctors } from '../controllers/doctor.js';
import { getPatients,createPatient,loginnow,showPatient } from '../controllers/patient.js';




const router =express.Router();

// router.get('/patients',getPatients);
// router.post('/patients',createPatient);
// router.post('/PatientLogin',loginnow);
 




export default router;