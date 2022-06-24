import { BaseStudent } from "../model/BaseStudent";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    // CRIAR ESTUDANTE
    async insert(student: BaseStudent){
            await StudentDatabase.connection('STUDENT')
            .insert({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                birth: student.getBirth(),
                class_id: student.getClassId(),
                // hobbies: student.getHobbies()
            })
    };

    // BUSCAR ESTUDANTE PELO NOME
    async getStudentName(name: string): Promise<any[]>{
        const result = await StudentDatabase.connection("STUDENT").where("name","LIKE",`${name}`)
        return result
    }
    
    // MUDAR ESTUDANTE DE CLASSE

    async changeStudent(id:string, class_id: string ): Promise<number>{
        const result = await StudentDatabase.connection("STUDENT").update({class_id: class_id}).where(`id`, `LIKE`, `${id}`)
        return result
    }

    public async getAll(){
        try {
            const result = await BaseDatabase.connection("STUDENT").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    };
}