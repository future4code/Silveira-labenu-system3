import {app} from "./app";
import {Request, Response} from "express";

app.get("/test", (req:Request, res:Response) => {
    let errorCode:number = 400;
    try{
        const result = "Teste"
        res.send(result)
    } catch (err:any) {
        let error = err.sqlMessage || err.message;
        res.status(errorCode).send(error)
    }
})