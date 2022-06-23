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
            throw new Error()
        }
        
        const allTeachers = new TeacherDatabase();
        const teachers = await allTeachers.getAll();

        const teacher_id = teachers.filter((teacher) => {
            if (teacher.module === module) {
                return teacher.id
            }
        })

        const allStudents = new StudentDatabase();
        const students = await allStudents.getAll();

        const student_id = students.filter((stud) => {
            if (stud.module === module) {
                return stud.id
            }
        })
        if (student_id === null || teacher_id === null) {
            console.log(`One of the items is null`)
        }
        const newClass = new BaseClass(id, name, teacher_id, student_id, module);
        const _class = new ClassDatabase();
        await _class.insertClass(newClass);

        res.status(201).send({class: newClass});
    } catch (error:any) {
        let err = error.sqlMessage||error.message;
        res.send(err);
    }
}