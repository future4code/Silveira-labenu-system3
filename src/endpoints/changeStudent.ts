import { StudentDatabase } from "../data/StudentDataBase";
import {Request, Response} from "express";

export async function changeStudent(req:Request, res:Response):Promise<void> {
    try {   
        const {id} = req.params;
        const {class_id} = req.body;

        if (!id || !class_id) {
            throw new Error (`Id or class_id is missing`)
        }

        const studentDB = new StudentDatabase();

        await studentDB.changeStudent(id, class_id)

        const results = await studentDB.getAll();
        const result = results.find((res) => res.id === id);
        if (!result){
            throw new Error(`Student was not found`)
        }

        res.status(200).send({result: result});        
    } catch (error:any) {
        let err = error.message || error.sqlMessage || error.data?.message;
        res.status(400).send(err);
    }
}