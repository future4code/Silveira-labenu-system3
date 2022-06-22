export class BaseClass {
    constructor(
        private id: string,
        private name: string,
        private teacher_id: string[],
        private student_id: string[],
        private module: number) { }
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