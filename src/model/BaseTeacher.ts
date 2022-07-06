import { Abstract } from "./BaseAbstract";
export class BaseTeacher extends Abstract {
    constructor(        
        id: string,
        name: string,
        email: string,
        birth: Date,
        class_id: number,
        protected specialty?: string[],
        ) 
        {
        super(id, name, email, birth, class_id)
    }
    public getSpecialty(): any {
        return this.specialty;
    }
}