import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export async function EditPatientController(req: Request, res: Response) {
    try {
        const { pacient_id } = req.params
        const { name, birth, genre, address, phone, email } = req.body

        const editedPatient = await prismaClient.patient.update({ 
            where: { id: pacient_id }, 
            data: { name, birth, genre, address, phone, email } 
        })

        return res.json(editedPatient)
    } catch (error) {
        console.log('Error when trying to edit patient:', error)
        return res.status(500).json({ error: 'Error when trying edit patient.' })
    }
}