import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function DeletePatientController(req: Request, res: Response) {
    try {
        const { pacient_id } = req.params

        const deletedPatient = await prismaClient.patient.delete({ where: { id: pacient_id } })
        return res.json(deletedPatient)
    } catch (error) {
        console.log('Error when trying to delete patient:', error)
        return res.status(500).json({ error: 'Error when trying to delete patient.' })
    }
}