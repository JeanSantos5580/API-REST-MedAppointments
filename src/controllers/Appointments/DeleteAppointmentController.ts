import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function DeleteAppointmentController(req: Request, res: Response) {
    try {
        const { appointment_id } = req.params

        const deletedAppointment = await prismaClient.appointment.delete({ where: { id: appointment_id } })

        return res.json(deletedAppointment)
    } catch (error) {
        console.log('Error when trying to delete appointment:', error)
        return res.status(500).json({ error: 'Error when trying to delete appointment.' })
    }
}