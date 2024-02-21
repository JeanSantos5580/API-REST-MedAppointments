import { Router } from "express"
import { CreateAppointmentController } from "../controllers/Appointments/CreateAppointmentController"
import { DeleteAppointmentController } from "../controllers/Appointments/DeleteAppointmentController"
import { EditAppointmentController } from "../controllers/Appointments/EditAppointmentController"
import { GetAppointmentsController } from "../controllers/Appointments/GetAppointmentsController"

const router = Router()

router.post('/add', CreateAppointmentController)
router.put('/edit/:appointment_id', EditAppointmentController)
router.get('/', GetAppointmentsController)
router.delete('/delete/:appointment_id', DeleteAppointmentController)

export {router as appointmentRoutes}