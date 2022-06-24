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
exports.StudentDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class StudentDatabase extends BaseDatabase_1.BaseDatabase {
    insert(student) {
        return __awaiter(this, void 0, void 0, function* () {
            yield StudentDatabase.connection('STUDENT')
                .insert({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                birth: student.getBirth(),
                class_id: student.getClassId(),
            });
        });
    }
    ;
    getStudentName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield StudentDatabase.connection("STUDENT").where("name", "LIKE", `${name}`);
            return result;
        });
    }
    changeStudent(id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield StudentDatabase.connection("STUDENT").update({ class_id: class_id }).where(`id`, `LIKE`, `${id}`);
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("STUDENT").select("*");
                return result;
            }
            catch (error) {
                throw new Error("Error inesperado");
            }
        });
    }
    ;
}
exports.StudentDatabase = StudentDatabase;
//# sourceMappingURL=StudentDataBase.js.map