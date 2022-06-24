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
exports.createTeacher = void 0;
const TeacherDatabase_1 = require("./../data/TeacherDatabase");
const BaseTeacher_1 = require("./../model/BaseTeacher");
function createTeacher(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, birth, class_id } = req.body;
            const id = Date.now().toString();
            if (!name || !email || !birth || !class_id) {
                res.statusCode = 422;
                throw new Error("Por favor, preencha todos os campos. ");
            }
            const teacher = new BaseTeacher_1.BaseTeacher(id, name, email, birth, class_id);
            const teacherDB = new TeacherDatabase_1.TeacherDatabase();
            yield teacherDB.insert(teacher);
            res.status(201).send({ teacher });
        }
        catch (error) {
            let err = error.sqlMessage || error.message || ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message);
            res.status(500).send(err);
        }
    });
}
exports.createTeacher = createTeacher;
//# sourceMappingURL=createTeacher.js.map