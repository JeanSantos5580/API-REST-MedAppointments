import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetAllPatientDoctorListController(req: Request, res: Response) {
    try {
        const patientDoctors = await prismaClient.patientDoctor.findMany()
        return res.json(patientDoctors)
    } catch (error) {
        console.log('Error when trying to get patient_doctor relations:', error)
        return res.status(500).json({ error: 'Error when trying to get patient_doctor relations.' })
    }
}