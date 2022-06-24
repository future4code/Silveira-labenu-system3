import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDataBase"

export const getStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const name: string = req.params.name

        const studentDB = new StudentDatabase()

        const getStudents = await studentDB.getStudentName(name)

        if(getStudents.length === 0){ 
            throw new Error ("Não encontramos nenhum estudante com esse nome")
        }

        res.status(200).send(getStudents)
                
    } catch (err:any){
        console.log("Deu ruim no endpoint getstudents")
    }
}