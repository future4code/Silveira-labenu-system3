import { BaseTeacher } from './../model/BaseTeacher';
import { BaseDatabase } from "./BaseDatabase";
    
export class TeacherDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("TEACHER").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
    public async insert(teacher: BaseTeacher){
        try {
            await BaseDatabase.connection("TEACHER")
            .insert({
                id: teacher.getId(),
                name: teacher.getName(),
                birth: teacher.getBirth(),
                email: teacher.getEmail(),
                class_id: teacher.getClassId(),
                specialty: teacher.getSpecialty()
            })
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
}