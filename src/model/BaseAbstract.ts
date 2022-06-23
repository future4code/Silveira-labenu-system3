import moment from "moment"

export abstract class Abstract {
    protected id: string
    protected name: string
    protected email: string
    protected birth: string
    protected class_id: number
    constructor(id: string, name: string, email: string, birth: Date, class_id: number) {
        this.id = id,
            this.name = name,
            this.email = email,
            this.birth = moment(birth, "DD/MM/YYYY").format("YYYY-MM-DD"),
            this.class_id = class_id
    }
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
    public getBirth(): string {
        return this.birth;
    }
}