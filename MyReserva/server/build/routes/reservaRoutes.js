"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservaController_1 = __importDefault(require("../controllers/reservaController"));
class ReservaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reservaController_1.default.list);
        this.router.get('/:id', reservaController_1.default.getOne);
        this.router.post('/', reservaController_1.default.create);
        this.router.put('/:id', reservaController_1.default.update);
        this.router.delete('/:id', reservaController_1.default.delete);
    }
}
const reservaRoutes = new ReservaRoutes();
exports.default = reservaRoutes.router;
