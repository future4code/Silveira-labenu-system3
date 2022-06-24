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
exports.getStudents = void 0;
const StudentDataBase_1 = require("../data/StudentDataBase");
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const studentDB = new StudentDataBase_1.StudentDatabase();
        const getStudents = yield studentDB.getStudentName(name);
        if (getStudents.length === 0) {
            throw new Error("Não encontramos nenhum estudante com esse nome");
        }
        res.status(200).send(getStudents);
    }
    catch (err) {
        console.log("Deu ruim no endpoint getstudents");
    }
});
exports.getStudents = getStudents;
//# sourceMappingURL=getStudents.js.map