import {Request, Response} from "express";
import {ClassDatabase} from "../data/ClassDatabase";
import {StudentDatabase} from "../data/StudentDataBase";
import {TeacherDatabase} from "../data/TeacherDatabase";
import {BaseDatabase} from "../data/BaseDatabase";
import { BaseClass } from "../model/BaseClass";
import {MODULE} from "../model/BaseClass";

export async function changeModule (req:Request, res:Response): Promise<void> { 
    try {
        const {id} = req.params;
        const {module} = req.body;
        if (!id) {
            throw new Error (`Invalid ID params`);
        }
        if (!module) {
            throw new Error(`Module is undefined`);
        }
        if(module<0 || module>6) {
            throw new Error(`Value from module is not allowed`)
        }
        const data = new ClassDatabase();

        await data.putClass(id, module);

        const results = await data.getAllClasses();
        const result = results.find((res) => res.id === id);

        res.status(200).send({class: result})

    } catch (error:any) {
        let err = error.sqlMessage||error.message;
        res.send(err);
    }
}