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
exports.changeTeacher = void 0;
const TeacherDatabase_1 = require("../data/TeacherDatabase");
function changeTeacher(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { class_id } = req.body;
            if (!id || !class_id) {
                throw new Error(`Id or class_id is missing`);
            }
            const teacherDB = new TeacherDatabase_1.TeacherDatabase();
            yield teacherDB.changeTeacher(id, class_id);
            const results = yield teacherDB.getAll();
            const result = results.find((res) => res.id === id);
            if (!result) {
                throw new Error(`Teacher was not found`);
            }
            res.status(200).send({ result: result });
        }
        catch (error) {
            let err = error.message || error.sqlMessage || ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message);
            res.status(400).send(err);
        }
    });
}
exports.changeTeacher = changeTeacher;
//# sourceMappingURL=changeTeacher.js.map