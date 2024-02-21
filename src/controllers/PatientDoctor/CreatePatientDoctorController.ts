import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function CreatePatientDoctorController(req: Request, res: Response) {
    try {
        const { patient_id, doctor_id } = req.body

        const patient_doctor = await prismaClient.patientDoctor.create({
            data: { patient_id, doctor_id }
        })

        res.json(patient_doctor)
    } catch (error) {
        console.log('Error when creating patient_doctor relation:', error)
        return res.status(500).json({ error: 'Error when creating patient_doctor relation.' })
    }

}