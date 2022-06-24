import { getStudents } from './endpoints/getStudents';
import {app} from "./app";
import {Request, Response} from "express";
import {getClasses} from "./endpoints/getClasses";
import {createClass} from "./endpoints/createClass";
import createStudent from "./endpoints/createStudent";
import {changeModule} from "./endpoints/changeModule";
// import { createTeacher } from "./endpoints/createTeacher";

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

// CLASSES
app.get("/class", getClasses);
app.post("/class", createClass);
app.put("/class/:id", changeModule);

// ESTUDANTES
app.get("/student", getStudents)
app.post("/student", createStudent)

// app.post("/teacher", createTeacher);

