import { Abstract } from "./BaseAbstract";

export class BaseStudent extends Abstract {
    constructor(
        id: string,
        name: string,
        email: string,
        birth: Date,
        class_id: number,
        protected hobbies: string[]
    ) {
        super(id, name, email, birth, class_id)
    }

    public getHobbies(): string[] {
        return this.hobbies;
    }
}