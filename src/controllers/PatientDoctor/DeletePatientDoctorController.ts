import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function DeletePatientDoctorController(req: Request, res: Response) {
    try {
        const { patient_id, doctor_id } = req.params

        const deletedDoctor = await prismaClient.patientDoctor.deleteMany({
            where: {
                patient_id: patient_id,
                doctor_id: doctor_id,
            },
        });

        return res.json(deletedDoctor)
    } catch (error) {
        console.log('Error when trying to delete doctor:', error)
        return res.status(500).json({ error: 'Error when trying to delete doctor.' })
    }
}