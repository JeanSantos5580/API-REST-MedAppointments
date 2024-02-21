import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function EditPatientDoctorController(req: Request, res: Response) {
    try {
        const { patient_doctor_id } = req.params
        const { patient_id, doctor_id } = req.body

        const editedUser = await prismaClient.patientDoctor.update({ 
            where: { id: patient_doctor_id }, 
            data: { patient_id, doctor_id } 
        })

        return res.json(editedUser)
    } catch (error) {
        console.log('Error when trying to edit patient_doctor:', error)
        return res.status(500).json({ error: 'Error when trying edit patient_doctor.' })
    }
}