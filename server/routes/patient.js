import express from 'express';
import { getPatients,createPatient,loginnow } from '../controllers/patient.js';
import doctor from '../models/doctor.js'


const router =express.Router();
// router.get('/',(req,res)=>{
//     res.send('router is working');
// })

router.get('/patients',getPatients);
router.post('/patients',createPatient);
router.post('/PatientLogin',loginnow);
router.get('/Homepage');


export default router;