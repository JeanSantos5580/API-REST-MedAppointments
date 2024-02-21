import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function CreatePatientController(req: Request, res: Response) {
    try {
        const { name, birth, genre, address, phone, email } = req.body

        const patient = await prismaClient.patient.create({
            data: { name, birth, genre, address, phone, email }
        })

        res.json(patient)
    } catch (error) {
        console.log('Error when creating patient:', error)
        return res.status(500).json({ error: 'Error when creating patient.' })
    }

}