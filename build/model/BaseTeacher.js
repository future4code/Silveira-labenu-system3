"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTeacher = void 0;
const BaseAbstract_1 = require("./BaseAbstract");
class BaseTeacher extends BaseAbstract_1.Abstract {
    constructor(id, name, email, birth, class_id, specialty) {
        super(id, name, email, birth, class_id);
        this.specialty = specialty;
    }
    getSpecialty() {
        return this.specialty;
    }
}
exports.BaseTeacher = BaseTeacher;
//# sourceMappingURL=BaseTeacher.js.map