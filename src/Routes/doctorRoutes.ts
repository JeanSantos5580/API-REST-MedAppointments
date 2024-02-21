import { Router } from "express";
import { CreateDoctorController } from "../controllers/Doctor/CreateDoctorController";
import { DeleteDoctorController } from "../controllers/Doctor/DeleteDoctorController";
import { EditDoctorController } from "../controllers/Doctor/EditDoctorController";
import { GetDoctorAppointmentsController } from "../controllers/Doctor/GetDoctorAppointmentsController";
import { GetDoctorsController } from "../controllers/Doctor/GetDoctorsController";

const router = Router()

router.post('/add', CreateDoctorController)
router.put('/edit/:doctor_id', EditDoctorController)
router.get('/', GetDoctorsController)
router.get('/appointment/:doctor_id', GetDoctorAppointmentsController)
router.delete('/delete/:doctor_id', DeleteDoctorController)


export { router as doctorRoutes }