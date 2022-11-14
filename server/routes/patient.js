import express from 'express';
import { getDoctors } from '../controllers/doctor.js';
import { getPatients,createPatient,showPatient,loginpat,createcomplaint } from '../controllers/patient.js';




const router =express.Router();

router.get('/patients',getPatients);
router.post('/patients',createPatient);
router.get('/patients/:id', showPatient);
// router.post('/patients/:id', showPatient);

router.post('/PatientLogin',loginpat);
router.post('/sendcomplaint',createcomplaint);



export default router;