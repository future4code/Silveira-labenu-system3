import { BaseDatabase } from "./BaseDatabase";
import { BaseClass } from "../model/BaseClass"
import { MODULE } from "../model/BaseClass";


export class ClassDatabase extends BaseDatabase {

    public async getAllClasses() {
        try {
            const data = await BaseDatabase.connection("CLASS").select("*");
            const result = data.filter((res) => res.module !== MODULE.ZERO);
            console.log(data, result);
            return result;
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    };

    // public async getAllClasses() {
    //         const data = await ClassDatabase.connection("CLASS").select("*");
    //         const result = data.filter((res) => res.module !== MODULE.ZERO);
    //         console.log(data, result);
    //         return result;
    // };

    public async insertClass(_class: BaseClass) {
        try {            
            await BaseDatabase.connection("CLASS")
                .insert({
                    id: _class.getId(),
                    name: _class.getName(),
                    module: _class.getModule()
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    };

    public async putClass(id:string, module: MODULE) {
        try {
            await BaseDatabase.connection("CLASS").update({ module: module }).where(`id`, `LIKE`, `${id}`)
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    };

}