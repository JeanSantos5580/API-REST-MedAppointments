import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetDoctorPatientListController(req: Request, res: Response) {
    try {
        const { doctor_id } = req.params

        const doctorPatients = await prismaClient.patientDoctor.findMany({ where: { doctor_id: doctor_id }, include: { Patient: true } })

        const patients = doctorPatients.map(doctorPatient => doctorPatient.Patient)

        return res.json(patients)
    } catch (error) {
        console.log('Error when trying to get patients related to this doctor:', error)
        return res.status(500).json({ error: 'Error when trying to get patients related to this doctor.' })
    }
}