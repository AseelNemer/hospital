import express from 'express';

import { getDoctors,createDoctor,showDoctor ,loginnow} from '../controllers/doctor.js';
import { getPatients,createPatient ,showPatient, loginpat} from '../controllers/patient.js';

import doctor from '../models/doctor.js'


const router =express.Router();
// router.get('/',(req,res)=>{
//     res.send('router is working');
// })

router.get('/doctors',getDoctors);
router.post('/doctors',createDoctor);
router.get('/doctors/:id', showDoctor);
router.post('/Login',loginnow);


router.get('/patients',getPatients);
router.post('/patients',createPatient);
router.get('/patients/:id', showPatient);
router.post('/PatientLogin',loginpat);


export default router;