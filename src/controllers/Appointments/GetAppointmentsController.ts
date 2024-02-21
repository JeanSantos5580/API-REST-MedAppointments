import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetAppointmentsController(req: Request, res: Response) {
    try {
        const appointment = await prismaClient.appointment.findMany()
        return res.json(appointment)
    } catch (error) {
        console.log('Error when trying to get appointments:', error)
        return res.status(500).json({ error: 'Error when trying to get appointments.' })
    }
}