
import { TeacherDatabase } from './../data/TeacherDatabase';
import { Request, Response } from "express";

export async function getTeachers(req: Request, res: Response): Promise<void> {
    try {

        const allTeachers = new TeacherDatabase();
        const teachers = await allTeachers.getAll();

        if(teachers.length === 0){ 
            throw new Error ("Não encontramos nenhum estudante com esse nome")
        }

        res.status(200).send(teachers)
        
    } catch (error: any) {
        let err = error.sqlMessage || error.message;
        res.send(err);
    }
}