import { Request, Response } from "express"
import { TeacherDatabase } from "../data/TeacherDatabase"

export async class createTeacher (
    req: Request,
    res: Response
): Promise<void> {

    try {
        const { name, email, birth, class_id, specialty } = req.body
        const id = Date.now().toString()

        res.status(201).end()
    }
    catch (error) {
        res.status(500).end()
    }
}