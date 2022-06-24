import { BaseStudent } from "../model/BaseStudent";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    // PEGAR TODOS OS ESTUDANTES - NÃO NECESSÁRIA
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("STUDENT").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    };

    // CRIAR ESTUDANTE
    public async insert(student: BaseStudent){
        try {
            await BaseDatabase.connection("STUDENT")
            .insert({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                birth: student.getBirth(),
                class_id: student.getClassId(),
                hobbies: student.getHobbies()
            })
        } catch (error) {
            throw new Error("Error inesperado")
        }
    };

    // BUSCAR ESTUDANTE PELO NOME
    public async getStudentName(name: string): Promise<any[]>{
        const result = await BaseDatabase.connection("STUDENT").where("name","LIKE",`${name}`)
        return result
    }
}