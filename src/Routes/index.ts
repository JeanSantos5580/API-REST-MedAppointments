import { appointmentRoutes } from "./appoitmentRoutes";
import { doctorRoutes } from "./doctorRoutes";
import { patientDoctorRoutes } from "./patientDoctorRoutes";
import { patientRoutes } from "./patientRoutes";

const routes = [
    {
        path: '/patient',
        router: patientRoutes
    },
    {
        path: '/doctor',
        router: doctorRoutes
    },
    {
        path: '/appointment',
        router: appointmentRoutes
    },
    {
        path: '/patientDoctor',
        router: patientDoctorRoutes
    },
]

export { routes }