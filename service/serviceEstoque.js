"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estoqueService = exports.EstoqueService = void 0;
const readCSV_1 = require("../model/readCSV");
const writeCSV_1 = require("../model/writeCSV");
const filePath = './model/estoque.csv';
class EstoqueService {
    async criar(data) {
        const produtosAtuais = await (0, readCSV_1.readCSV)(filePath);
        if (typeof data.nome !== 'string' || isNaN(data.valor) || isNaN(data.peso) || isNaN(data.quantidade)) {
            throw new Error('dados invalidos para o produto');
        }
        produtosAtuais.push(data);
        await (0, writeCSV_1.writeCSV)(filePath, produtosAtuais);
    }
    async remover(nomeProduto) {
        const produtosNoSistema = await (0, readCSV_1.readCSV)(filePath);
        const sistemaAtualizado = produtosNoSistema.filter((produto) => produto.nome !== nomeProduto);
        if (produtosNoSistema.length === sistemaAtualizado.length) {
            throw new Error('Produto não encontrado no estoque');
        }
        await (0, writeCSV_1.writeCSV)(filePath, sistemaAtualizado);
    }
    async listar() {
        return await (0, readCSV_1.readCSV)(filePath);
    }
}
exports.EstoqueService = EstoqueService;
exports.estoqueService = new EstoqueService();
