import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetDoctorAppointmentsController(req: Request, res: Response) {
    try {
        const { doctor_id } = req.params
        const doctor = await prismaClient.doctor.findUnique({
            where: { id: doctor_id },
            include: {
                Appointment: true
            }
        })
        return res.json(doctor)
    } catch (error) {
        console.log('Error when trying to get appointments from this doctor:', error)
        return res.status(500).json({ error: 'Error when trying to get appointments from this doctor.' })
    }
}