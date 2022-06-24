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
exports.createClass = void 0;
const ClassDatabase_1 = require("../data/ClassDatabase");
const BaseClass_1 = require("../model/BaseClass");
function createClass(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, module } = req.body;
            const id = Date.now().toString();
            if (!name || !module) {
                throw new Error(`Name or module is missing from body`);
            }
            if (module < 0 || module > 6) {
                throw new Error(`Module inexistent`);
            }
            const _class = new BaseClass_1.BaseClass(id, name, module);
            const newDataBaseClass = new ClassDatabase_1.ClassDatabase();
            yield newDataBaseClass.insertClass(_class);
            res.status(200).send(_class);
        }
        catch (error) {
            let err = error.sqlMessage || error.message || ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message);
            res.send(err);
        }
    });
}
exports.createClass = createClass;
//# sourceMappingURL=createClass.js.map