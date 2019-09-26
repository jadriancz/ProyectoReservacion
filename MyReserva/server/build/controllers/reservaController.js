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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReservasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reserva = yield database_1.default.query('select * from restaurantes');
            res.json(reserva);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reserva = yield database_1.default.query('SELECT * from restaurantes where id=?', [id]);
            if (reserva.length > 0) {
                return res.json(reserva[0]);
            }
            res.status(404).json({ text: "The reserva doesn't" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO restaurantes set ?', [req.body]);
            res.json({ message: 'reserva saved ' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE from restaurantes where id= ?', [id]);
            res.json({ message: 'delete reserva ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Update restaurantes set ?  where id= ?', [req.body, id]);
            res.json({ text: 'actualiza a reserva ' + id });
        });
    }
}
const reservaController = new ReservasController();
exports.default = reservaController;
