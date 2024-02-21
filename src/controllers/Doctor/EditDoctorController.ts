import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function EditDoctorController(req: Request, res: Response) {
    try {
        const { doctor_id } = req.params
        const { name, specialty, crm, address, phone, email, bio } = req.body

        const editedDoctor = await prismaClient.doctor.update({
            where: { id: doctor_id },
            data: { name, specialty, crm, address, phone, email, bio }
        })

        return res.json(editedDoctor)
    } catch (error) {
        console.log('Error when trying to edit doctor:', error)
        return res.status(500).json({ error: 'Error when trying edit doctor.' })
    }
}