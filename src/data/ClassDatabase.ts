import { BaseDatabase } from "./BaseDatabase";
import { BaseClass } from "../model/BaseClass"
import { MODULE } from "../model/BaseClass";

export class ClassDatabase extends BaseDatabase {
    public async getAllClasses() {
        try {
            const data = await BaseDatabase.connection("CLASS").select("*");
            const result = data.filter((res) => res.module !== MODULE.ZERO);
            return result;
        } catch (error) {
            throw new Error();
        }
    };

    public async insertClass(_class: BaseClass) {
        try {
            await BaseDatabase.connection("CLASS").insert({
                id: _class.getId(),
                name: _class.getName(),
                teacher_id: _class.getTeachersId(),
                student_id: _class.getStudendsId(),
                module: _class.getModule()
            })
        } catch (error) {
            throw new Error();
        }
    };

    public async putClass(_class: BaseClass, module: MODULE) {
        try {
            await BaseDatabase.connection("CLASS").update({ module: module }).where(`id`, `=`, `${_class.getId()}`)
        } catch (error) {
            throw new Error();
        }
    };

}