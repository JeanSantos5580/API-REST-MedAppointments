import { Router } from "express";
import { CreatePatientController } from "../controllers/Patient/CreatePatientController";
import { EditPatientController } from "../controllers/Patient/EditPatientController";
import { GetPatientsController } from "../controllers/Patient/GetPatientsController";
import { GetPatientAppointmentsController } from "../controllers/Patient/GetPatientAppointmentsController";
import { DeletePatientController } from "../controllers/Patient/DeletePatientController";

const router = Router();

router.post('/add', CreatePatientController);
router.put('/edit/:pacient_id', EditPatientController);
router.get('/', GetPatientsController);
router.get('/appointment/:pacient_id', GetPatientAppointmentsController);
router.delete('/delete/:pacient_id', DeletePatientController);

export { router as patientRoutes };
