import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetPatientsController(req: Request, res: Response) {
    try {
        const patients = await prismaClient.patient.findMany()
        return res.json(patients)
    } catch (error) {
        console.log('Error when trying to get patients:', error)
        return res.status(500).json({ error: 'Error when trying to get patients.' })
    }
}