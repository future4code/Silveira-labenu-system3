import { BaseClass } from './../model/BaseClass';
import { StudentDatabase } from './../data/StudentDataBase';
import { TeacherDatabase } from './../data/TeacherDatabase';
import { Request, Response } from "express";
import { ClassDatabase } from "../data/ClassDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export async function getClasses(req: Request, res: Response): Promise<void> {
    try {

        const _class = new ClassDatabase();

        const result = await _class.getAllClasses();
        const newResult = [...result];
        
        const allTeachers = new TeacherDatabase();
        const teachers = await allTeachers.getAll();

        const allStudents = new StudentDatabase();
        const students = await allStudents.getAll();

        async function newResults(newResult: any[]): Promise<any[]> {
            console.log('teachers', teachers)
            const getAll:any[] = newResult.map((res) => {
                const teacher_id = teachers.filter((teacher) => {
                    if (teacher.class_id === res.id) {
                        return teacher.id
                    }
                }).map((teacher) => teacher.id)
                const student_id = students.filter((stud) => {
                    if (stud.class_id === res.id) {
                        return stud.id
                    }
                }).map((stud) => stud.id)
                return {
                    id: res.id,
                    name: res.name,
                    module: res.module,
                    teacher_id: teacher_id,
                    student_id: student_id
            }
            })
 
            return getAll;
        }
        const allClasses = await newResults(newResult);
        // console.log('Classes', await allClasses)
        res.status(200).send({ allClasses: allClasses });
    } catch (error: any) {
        let err = error.sqlMessage || error.message;
        res.send(err);
    }
}