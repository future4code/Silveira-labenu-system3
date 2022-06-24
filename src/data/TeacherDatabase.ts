import { BaseTeacher } from './../model/BaseTeacher';
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
    public async getAll() {
        try {
            const result = await TeacherDatabase.connection("TEACHER").select("*");
            return result;
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    // MUDAR DOCENTE DE CLASSE

    async changeTeacher(id: string, class_id: string): Promise<number> {
        try {
            const result = await TeacherDatabase.connection("TEACHER").update({ class_id: class_id }).where(`id`, `LIKE`, `${id}`);
            return result;
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    // CRIAR PROFESSOR

    public async insert(teacher: BaseTeacher) {
        try {
            await TeacherDatabase.connection("TEACHER")
                .insert({
                    id: teacher.getId(),
                    name: teacher.getName(),
                    birth: teacher.getBirth(),
                    email: teacher.getEmail(),
                    class_id: teacher.getClassId(),
                    // specialty: teacher.getSpecialty()
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }
}