"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class TeacherDatabase extends BaseDatabase_1.BaseDatabase {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("TEACHER").select("*");
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
    changeTeacher(id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("TEACHER").update({ class_id: class_id }).where(`id`, `LIKE`, `${id}`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
    insert(teacher) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("TEACHER")
                    .insert({
                    id: teacher.getId(),
                    name: teacher.getName(),
                    birth: teacher.getBirth(),
                    email: teacher.getEmail(),
                    class_id: teacher.getClassId(),
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
}
exports.TeacherDatabase = TeacherDatabase;
//# sourceMappingURL=TeacherDatabase.js.map