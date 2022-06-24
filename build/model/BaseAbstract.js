"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abstract = void 0;
const moment_1 = __importDefault(require("moment"));
class Abstract {
    constructor(id, name, email, birth, class_id) {
        this.id = id,
            this.name = name,
            this.email = email,
            this.birth = (0, moment_1.default)(birth, "DD/MM/YYYY").format("YYYY-MM-DD"),
            this.class_id = class_id;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getClassId() {
        return this.class_id;
    }
    getEmail() {
        return this.email;
    }
    getBirth() {
        return this.birth;
    }
}
exports.Abstract = Abstract;
//# sourceMappingURL=BaseAbstract.js.map