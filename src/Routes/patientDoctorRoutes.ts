import { Router } from "express"
import { CreatePatientDoctorController } from "../controllers/PatientDoctor/CreatePatientDoctorController"
import { DeletePatientDoctorController } from "../controllers/PatientDoctor/DeletePatientDoctorController"
import { EditPatientDoctorController } from "../controllers/PatientDoctor/EditPatientDoctorController"
import { GetAllPatientDoctorListController } from "../controllers/PatientDoctor/GetAllPatientDoctorListController"
import { GetDoctorPatientListController } from "../controllers/PatientDoctor/GetDoctorPatientListController"
import { GetPatientDoctorListController } from "../controllers/PatientDoctor/GetPatientDoctorListController"

const router = Router()

router.post('/add', CreatePatientDoctorController)
router.delete('/:patient_id/:doctor_id', DeletePatientDoctorController)
router.put('/edit/:patient_doctor_id', EditPatientDoctorController)
router.get('/', GetAllPatientDoctorListController)

router.get('/doctor/:patient_id', GetPatientDoctorListController)

router.get('/patient/:doctor_id', GetDoctorPatientListController)

export {router as patientDoctorRoutes}