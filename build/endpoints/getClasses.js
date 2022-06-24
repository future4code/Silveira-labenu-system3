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
exports.getClasses = void 0;
const StudentDataBase_1 = require("./../data/StudentDataBase");
const TeacherDatabase_1 = require("./../data/TeacherDatabase");
const ClassDatabase_1 = require("../data/ClassDatabase");
function getClasses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _class = new ClassDatabase_1.ClassDatabase();
            const result = yield _class.getAllClasses();
            const newResult = [...result];
            const allTeachers = new TeacherDatabase_1.TeacherDatabase();
            const teachers = yield allTeachers.getAll();
            const allStudents = new StudentDataBase_1.StudentDatabase();
            const students = yield allStudents.getAll();
            function newResults(newResult) {
                return __awaiter(this, void 0, void 0, function* () {
                    const getAll = newResult.map((res) => __awaiter(this, void 0, void 0, function* () {
                        const teacher_id = teachers.filter((teacher) => {
                            if (teacher.turma_id === res.id) {
                                return teacher.id;
                            }
                        });
                        const student_id = students.filter((stud) => {
                            if (stud.turma_id === res.id) {
                                return stud.id;
                            }
                        });
                        return {
                            id: res.id,
                            name: res.name,
                            module: res.module,
                            teacher_id: teacher_id,
                            student_id: student_id
                        };
                    }));
                    return getAll;
                });
            }
            const allClasses = yield newResults(newResult);
            console.log('Classes', allClasses);
            res.status(200).send({ allClasses: result });
        }
        catch (error) {
            let err = error.sqlMessage || error.message;
            res.send(err);
        }
    });
}
exports.getClasses = getClasses;
//# sourceMappingURL=getClasses.js.map