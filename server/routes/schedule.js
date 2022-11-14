import express from 'express';
import { getSchedule,createSchedule,showSchedule } from '../controllers/schedule.js';




const router =express.Router();

router.get('/schedules',getSchedule);
router.post('/schedules',createSchedule);
router.get('/schedules/:id', showSchedule);

export default router;