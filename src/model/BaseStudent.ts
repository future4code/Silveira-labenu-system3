import { Abstract } from "./BaseAbstract";
export class BaseStudent extends Abstract {
    constructor(
        id: string,
        name: string,
        email: string,
        birth: Date,
        class_id: number,
        private hobbies: string[]
    ) {
        super(id, name, email, birth, class_id)
    }

    public getHobbies(): string[] {
        return this.hobbies;
    }
}