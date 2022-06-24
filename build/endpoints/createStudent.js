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
const StudentDataBase_1 = require("../data/StudentDataBase");
const BaseStudent_1 = require("../model/BaseStudent");
function createStudent(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, birth, class_id } = req.body;
            const id = Date.now().toString();
            if (!name || !email || !birth || !class_id) {
                res.statusCode = 422;
                throw new Error("Por favor, preencha todo os campos. ");
            }
            const studentDB = new StudentDataBase_1.StudentDatabase();
            const student = new BaseStudent_1.BaseStudent(id, name, email, birth, class_id);
            yield studentDB.insert(student);
            res.status(200).send(student);
            console.log(student);
        }
        catch (error) {
            let err = error.sqlMessage || error.message || ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message);
            res.send(err);
        }
    });
}
exports.default = createStudent;
//# sourceMappingURL=createStudent.js.map