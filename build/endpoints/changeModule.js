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
exports.changeModule = void 0;
const ClassDatabase_1 = require("../data/ClassDatabase");
function changeModule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { module } = req.body;
            if (!id) {
                throw new Error(`Invalid ID params`);
            }
            if (!module) {
                throw new Error(`Module is undefined`);
            }
            if (module < 0 || module > 6) {
                throw new Error(`Value from module is not allowed`);
            }
            const data = new ClassDatabase_1.ClassDatabase();
            yield data.putClass(id, module);
            const results = yield data.getAllClasses();
            const result = results.find((res) => res.id === id);
            res.status(200).send({ class: result });
        }
        catch (error) {
            let err = error.sqlMessage || error.message;
            res.send(err);
        }
    });
}
exports.changeModule = changeModule;
//# sourceMappingURL=changeModule.js.map