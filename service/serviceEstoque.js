"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estoqueService = exports.EstoqueService = void 0;
const writeCSV_1 = require("../model/writeCSV");
const filePath = './model/estoque.csv';
class EstoqueService {
    async criar(data) {
        if (typeof data.nome !== 'string' || isNaN(data.valor) || isNaN(data.peso) || isNaN(data.quantidade)) {
            throw new Error('dados invalidos para o produto');
        }
        await (0, writeCSV_1.writeCSV)(filePath, [data]);
    }
}
exports.EstoqueService = EstoqueService;
exports.estoqueService = new EstoqueService();
