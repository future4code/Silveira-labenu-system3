import {Request, Response} from "express"
import { StudentDatabase } from "../data/StudentDataBase"
import { BaseStudent } from "../model/BaseStudent"

export default async function createStudent (req: Request, res: Response): Promise<void> {
    try {
        // const {name, email, birth, class_id, hobbies} = req.body;
        const {name, email, birth, class_id} = req.body;

        const id = Date.now().toString();

        // if (!name || !email || !birth || !class_id || !hobbies) {
            if (!name || !email || !birth || !class_id ) {
         res.statusCode = 422
         throw new Error("Por favor, preencha todo os campos. ")
        }

        const studentDB = new StudentDatabase();

        // const student = new BaseStudent (id, name, email, birth, class_id, hobbies);
        const student = new BaseStudent (id, name, email, birth, class_id);

        await studentDB.insert(student);

        res.status(200).send(student);
        console.log(student)

    } catch(error: any) {
        let err = error.sqlMessage||error.message||error.data?.message;
        res.send(err);
    }
}