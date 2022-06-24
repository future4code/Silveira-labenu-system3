import { TeacherDatabase } from "../data/TeacherDatabase";
import {Request, Response} from "express";

export async function changeTeacher(req:Request, res:Response):Promise<void> {
    try {   
        const {id} = req.params;
        const {class_id} = req.body;

        if (!id || !class_id) {
            throw new Error (`Id or class_id is missing`)
        }

        const teacherDB = new TeacherDatabase();

        await teacherDB.changeTeacher(id, class_id)

        const results = await teacherDB.getAll();
        const result = results.find((res) => res.id === id);
        if (!result){
            throw new Error(`Teacher was not found`)
        }

        res.status(200).send({result: result});        
    } catch (error:any) {
        let err = error.message || error.sqlMessage || error.data?.message;
        res.status(400).send(err);
    }
}