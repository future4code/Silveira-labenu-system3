// import {Request, Response} from "express"
// import { StudentDataBase } from "../data/StudentDataBase"
// import { BaseStudent } from "../model/BaseStudent"

// export default async function createStudent (req: Request, res: Response): Promise<void> {
//     try {
//         const {name, email, birth, class_id, hobbies} = req.body;

//         const id = Date.now().toString();

//          if (!name || !email)

//         const student = new BaseStudent (id, name, email, birth, class_id, hobbies);

//         const studentDB = new StudentDataBase();

//         await studentDB.insert(student);

//         res.status(201).end();

//     } catch(error: any) {
//         res.status(500).end()
//     }
// }