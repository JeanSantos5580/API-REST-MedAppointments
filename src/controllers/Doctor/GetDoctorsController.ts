import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetDoctorsController(req: Request, res: Response) {
    try {
        const doctors = await prismaClient.doctor.findMany()
        return res.json(doctors)
    } catch (error) {
        console.log('Error when trying to get doctors:', error)
        return res.status(500).json({ error: 'Error when trying to get doctors.' })
    }
}