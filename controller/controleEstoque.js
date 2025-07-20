"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProdutos = adicionarProdutos;
const serviceEstoque_1 = require("../service/serviceEstoque");
async function adicionarProdutos(data) {
    try {
        await serviceEstoque_1.estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }
    catch (error) {
        console.log("Erro ao adicionar produto:", error);
    }
}
