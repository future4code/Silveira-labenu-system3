"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createClass_1 = require("./endpoints/createClass");
const getClasses_1 = require("./endpoints/getClasses");
const changeModule_1 = require("./endpoints/changeModule");
const createStudent_1 = __importDefault(require("./endpoints/createStudent"));
const getStudents_1 = require("./endpoints/getStudents");
const changeStudent_1 = require("./endpoints/changeStudent");
const createTeacher_1 = require("./endpoints/createTeacher");
const getTeachers_1 = require("./endpoints/getTeachers");
const changeTeacher_1 = require("./endpoints/changeTeacher");
app_1.app.get("/test", (req, res) => {
    let errorCode = 400;
    try {
        const result = "Teste";
        res.send(result);
    }
    catch (err) {
        let error = err.sqlMessage || err.message;
        res.status(errorCode).send(error);
    }
});
app_1.app.get("/class", getClasses_1.getClasses);
app_1.app.post("/class", createClass_1.createClass);
app_1.app.put("/class/:id", changeModule_1.changeModule);
app_1.app.get("/student/:name", getStudents_1.getStudents);
app_1.app.post("/student", createStudent_1.default);
app_1.app.put("/student/:id", changeStudent_1.changeStudent);
app_1.app.get("/teacher", getTeachers_1.getTeachers);
app_1.app.post("/teacher", createTeacher_1.createTeacher);
app_1.app.put("/teacher/:id", changeTeacher_1.changeTeacher);
//# sourceMappingURL=index.js.map