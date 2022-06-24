import {app} from "./app";
import {Request, Response} from "express";

import {createClass} from "./endpoints/createClass";
import {getClasses} from "./endpoints/getClasses";
import {changeModule} from "./endpoints/changeModule";

import createStudent from "./endpoints/createStudent";
import { getStudents } from './endpoints/getStudents';
import {changeStudent} from './endpoints/changeStudent';

import { createTeacher } from "./endpoints/createTeacher";
import { getTeachers } from './endpoints/getTeachers';
import {changeTeacher} from './endpoints/changeTeacher';


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
app.get("/student/:name", getStudents)
app.post("/student", createStudent)
app.put("/student/:id", changeStudent)

// PROFESSORES
app.get("/teacher", getTeachers)
app.post("/teacher", createTeacher);
app.put("/teacher/:id", changeTeacher)

