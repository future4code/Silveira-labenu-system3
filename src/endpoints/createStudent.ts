import {Request, Response} from "express"
import { StudentDatabase } from "../data/StudentDataBase"
import { BaseStudent } from "../model/BaseStudent"

export default async function createStudent (req: Request, res: Response): Promise<void> {
    try {
        const {name, email, birth, class_id, hobbies} = req.body;

        const id = Date.now().toString();

         if (!name || !email || !birth || !class_id || !hobbies) {
         res.statusCode = 422
         throw new Error("Por favor, preencha todo os campos. ")}

        const student = new BaseStudent (id, name, email, birth, class_id, hobbies);

        // const studentDB = new StudentDatabase();

        // await studentDB.insert(student);

        // res.status(201).end();
        console.log(student)

    } catch(error: any) {
        res.status(500).end()
    }
}