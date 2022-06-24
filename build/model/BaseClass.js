"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE = exports.BaseClass = void 0;
class BaseClass {
    constructor(id, name, module, teacher_id, student_id) {
        this.id = id;
        this.name = name;
        this.module = module;
        this.teacher_id = teacher_id;
        this.student_id = student_id;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getTeachersId() {
        return this.teacher_id;
    }
    getStudentsId() {
        return this.student_id;
    }
    getModule() {
        return this.module;
    }
}
exports.BaseClass = BaseClass;
var MODULE;
(function (MODULE) {
    MODULE[MODULE["ZERO"] = 0] = "ZERO";
    MODULE[MODULE["UM"] = 1] = "UM";
    MODULE[MODULE["DOIS"] = 2] = "DOIS";
    MODULE[MODULE["TRES"] = 3] = "TRES";
    MODULE[MODULE["QUATRO"] = 4] = "QUATRO";
    MODULE[MODULE["CINCO"] = 5] = "CINCO";
    MODULE[MODULE["SEIS"] = 6] = "SEIS";
})(MODULE = exports.MODULE || (exports.MODULE = {}));
//# sourceMappingURL=BaseClass.js.map