import { TeacherDatabase } from './../data/TeacherDatabase';
import { BaseTeacher } from './../model/BaseTeacher';
import { Request, Response } from "express"

export async function createTeacher(req: Request, res: Response): Promise<void> {
    try {
        // const { name, email, birth, class_id, specialty } = req.body
        const { name, email, birth, class_id } = req.body

        const id = Date.now().toString()

        // if (!name || !email || !birth || !class_id || !specialty) {
        if (!name || !email || !birth || !class_id) {
            res.statusCode = 422
            throw new Error("Por favor, preencha todos os campos. ")
        }

        // const teacher = new BaseTeacher (id, name, email, birth, class_id, specialty);
        const teacher = new BaseTeacher(id, name, email, birth, class_id);

        const teacherDB = new TeacherDatabase();

        await teacherDB.insert(teacher);

        res.status(201).send({teacher});
        // console.log(student)
    }
    catch (error: any) {
        let err = error.sqlMessage || error.message || error.data?.message
        res.status(500).send(err)
    }
}


