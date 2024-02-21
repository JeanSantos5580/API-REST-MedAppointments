import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function CreateAppointmentController(req: Request, res: Response) {
    try {
        const { appointment_time, status, observation, diagnostic, patient_id, doctor_id } = req.body

        const appointment = await prismaClient.appointment.create({
            data: { appointment_time, status, observation, diagnostic, patient_id, doctor_id }
        })

        res.json(appointment)
    } catch (error) {
        console.log('Error when creating appointment:', error)
        return res.status(500).json({ error: 'Error when creating appointment.' })
    }

}