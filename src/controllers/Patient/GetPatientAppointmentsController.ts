import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetPatientAppointmentsController(req: Request, res: Response) {
    try {
        const { pacient_id } = req.params
        const patients = await prismaClient.patient.findUnique({ where: { id: pacient_id },
         include: {
            Appointment: true
         } })
        return res.json(patients)
    } catch (error) {
        console.log('Error when trying to get appointments from this patient:', error)
        return res.status(500).json({ error: 'Error when trying to get appointments from this patient.' })
    }
}