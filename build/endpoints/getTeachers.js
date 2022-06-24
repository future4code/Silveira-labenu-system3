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
exports.getTeachers = void 0;
const TeacherDatabase_1 = require("./../data/TeacherDatabase");
function getTeachers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allTeachers = new TeacherDatabase_1.TeacherDatabase();
            const teachers = yield allTeachers.getAll();
            if (teachers.length === 0) {
                throw new Error("Não encontramos nenhum estudante com esse nome");
            }
            res.status(200).send(teachers);
        }
        catch (error) {
            let err = error.sqlMessage || error.message;
            res.send(err);
        }
    });
}
exports.getTeachers = getTeachers;
//# sourceMappingURL=getTeachers.js.map