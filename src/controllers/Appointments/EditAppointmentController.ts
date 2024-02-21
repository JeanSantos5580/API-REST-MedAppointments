import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function EditAppointmentController(req: Request, res: Response) {
    try {
        const { appointment_id } = req.params
        const { appointment_time, status, observation, diagnostic, patient_id, doctor_id } = req.body

        const editedAppointment = await prismaClient.appointment.update({
            where: { id: appointment_id },
            data: { appointment_time, status, observation, diagnostic, patient_id, doctor_id }
        })

        return res.json(editedAppointment)
    } catch (error) {
        console.log('Error when trying to edit appointment:', error)
        return res.status(500).json({ error: 'Error when trying edit appointments.' })
    }
}