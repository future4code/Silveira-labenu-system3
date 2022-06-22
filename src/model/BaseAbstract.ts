export abstract class Abstract {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected birth: Date,
        protected class_id: number) { }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getClassId(): number {
        return this.class_id;
    }
    public getEmail(): string {
        return this.email;
    }
    public getBirth(): Date {
        return this.birth;
    }
}