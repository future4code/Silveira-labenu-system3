export class BaseClass {
    constructor(
        protected id: string,
        protected name: string,
        protected module: MODULE,
        protected teacher_id?: any[],
        protected student_id?: any[]
        ) { }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getTeachersId() {
        return this.teacher_id;
    }
    public getStudentsId() {
        return this.student_id;
    }
    public getModule():MODULE {
        return this.module;
    }
}

export enum MODULE {
    ZERO = 0,
    UM = 1,
    DOIS = 2,
    TRES = 3,
    QUATRO = 4,
    CINCO = 5,
    SEIS = 6
}