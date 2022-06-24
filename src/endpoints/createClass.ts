import {Request, Response} from "express";
import {ClassDatabase} from "../data/ClassDatabase";
import {StudentDatabase} from "../data/StudentDataBase";
import {TeacherDatabase} from "../data/TeacherDatabase";
import {BaseDatabase} from "../data/BaseDatabase";
import { BaseClass } from "../model/BaseClass";

export async function createClass (req:Request, res:Response): Promise<void> { 
    try {
        const {name, module} = req.body;
        const id = Date.now().toString();
        
        if(!name || !module) {
            throw new Error(`Name or module is missing from body`)
        }

        if(module < 0 || module > 6) {
            throw new Error(`Module inexistent`)
        }
        
        const _class = new BaseClass(id, name,module);
        // console.log(_class)
        const newDataBaseClass = new ClassDatabase();
        await newDataBaseClass.insertClass(_class);

        res.status(200).send(_class);
    } catch (error:any) {
        let err = error.sqlMessage||error.message||error.data?.message;
        res.send(err);
    }
}