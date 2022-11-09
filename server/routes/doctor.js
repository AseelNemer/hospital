import express from 'express';
import { getDoctors,createDoctor ,loginnow,showDoctor} from '../controllers/doctor.js';
import doctor from '../models/doctor.js'


const router =express.Router();
// router.get('/',(req,res)=>{
//     res.send('router is working');
// })

router.get('/doctors',getDoctors);
router.post('/doctors',createDoctor);
router.get('/doctors/:id', showDoctor);
// router.get('/doctors/doctorProf', showDoctor);

router.post('/Login',loginnow);
// router.get('/Homepage');
// router.delete('/students/:id',deleteStudent);

export default router;