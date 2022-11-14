import express from 'express';
<<<<<<< HEAD
import { getDoctors,createDoctor ,loginnow,showDoctor} from '../controllers/doctor.js';
=======

import { getDoctors,createDoctor,showDoctor ,loginnow} from '../controllers/doctor.js';

>>>>>>> 190ac2c0030c0e3cc277cccb71d813c9a0bacc25
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
<<<<<<< HEAD
// router.get('/Homepage');
// router.delete('/students/:id',deleteStudent);
=======
//router.post('/upload',uploadphoto);


>>>>>>> 190ac2c0030c0e3cc277cccb71d813c9a0bacc25



export default router;
