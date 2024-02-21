import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function GetPatientDoctorListController(req: Request, res: Response) {
    try {
        const { patient_id } = req.params

        const patientDoctors = await prismaClient.patientDoctor.findMany({ where: { patient_id: patient_id }, include: { Doctor: true } })

        const doctors = patientDoctors.map(patientDoctor => patientDoctor.Doctor);
        
        return res.json(doctors)
    } catch (error) {
        console.log('Error when trying to get doctors related to this patient:', error)
        return res.status(500).json({ error: 'Error when trying to get doctors related to this patient.' })
    }
}