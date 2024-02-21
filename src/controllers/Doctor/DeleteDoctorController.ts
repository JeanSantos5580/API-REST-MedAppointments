import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function DeleteDoctorController(req: Request, res: Response) {
    try {
        const { doctor_id } = req.params

        const deletedDoctor = await prismaClient.doctor.delete({ where: { id: doctor_id } })

        return res.json(deletedDoctor)
    } catch (error) {
        console.log('Error when trying to delete doctor:', error)
        return res.status(500).json({ error: 'Error when trying to delete doctor.' })
    }
}