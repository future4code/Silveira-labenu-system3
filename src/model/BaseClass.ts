export class BaseClass {
    constructor(
        protected id: string,
        protected name: string,
        protected teacher_id: string[],
        protected student_id: string[],
        protected module: MODULE = MODULE.ZERO) { }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getTeachersId(): string[] {
        return this.teacher_id;
    }
    public getStudendsId(): string[] {
        return this.student_id;
    }
    public getModule():number {
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