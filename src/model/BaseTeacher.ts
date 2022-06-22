import { Abstract } from "./BaseAbstract";
export class BaseTeacher extends Abstract {
    constructor(
        private specialty: string[], 
        id: string,
        name: string,
        email: string,
        birth: Date,
        class_id: number) {
        super(id, name, email, birth, class_id)
    }
    public getSpecialty(): string[] {
        return this.specialty;
    }
}