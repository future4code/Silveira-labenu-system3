import {Request, Response} from "express";
import {ClassDatabase} from "../data/ClassDatabase";
import {BaseDatabase} from "../data/BaseDatabase";

export async function getClasses (req:Request, res:Response): Promise<void> { 
    try {
        const _class = new ClassDatabase();

        const result = await _class.getAllClasses();
        
        res.status(200).send({result});
    } catch (error:any) {
        let err = error.sqlMessage||error.message;
        res.send(err);
    }
}