"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStudent = void 0;
const BaseAbstract_1 = require("./BaseAbstract");
class BaseStudent extends BaseAbstract_1.Abstract {
    constructor(id, name, email, birth, class_id, hobbies) {
        super(id, name, email, birth, class_id);
        this.hobbies = hobbies;
    }
    getHobbies() {
        return this.hobbies;
    }
}
exports.BaseStudent = BaseStudent;
//# sourceMappingURL=BaseStudent.js.map