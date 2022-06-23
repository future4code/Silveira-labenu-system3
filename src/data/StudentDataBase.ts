import { BaseStudent } from "../model/BaseStudent";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("STUDENT").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    };
    public async insert(student: BaseStudent){
        try {
            await BaseDatabase.connection("STUDENT")
            .insert({
                id: student.getId(),
                name: student.getName(),
                birth: student.getBirth(),
                hobbies: student.getHobbies()
            })
        } catch (error) {
            throw new Error("Error inesperado")
        }
    };
}