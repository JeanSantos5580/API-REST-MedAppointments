import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export async function CreateDoctorController(req: Request, res: Response) {
    try {
        const { name, specialty, crm, address, phone, email, bio } = req.body

        const doctor = await prismaClient.doctor.create({
            data: { name, specialty, crm, address, phone, email, bio }
        })

        res.json(doctor)
    } catch (error) {
        console.log('Error when creating doctor:', error)
        return res.status(500).json({ error: 'Error when creating doctor.' })
    }

}