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
exports.ClassDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const BaseClass_1 = require("../model/BaseClass");
class ClassDatabase extends BaseDatabase_1.BaseDatabase {
    getAllClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield BaseDatabase_1.BaseDatabase.connection("CLASS").select("*");
                const result = data.filter((res) => res.module !== BaseClass_1.MODULE.ZERO);
                console.log(data, result);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
    ;
    insertClass(_class) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("CLASS")
                    .insert({
                    id: _class.getId(),
                    name: _class.getName(),
                    module: _class.getModule()
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
    ;
    putClass(id, module) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("CLASS").update({ module: module }).where(`id`, `LIKE`, `${id}`);
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
    ;
}
exports.ClassDatabase = ClassDatabase;
//# sourceMappingURL=ClassDatabase.js.map