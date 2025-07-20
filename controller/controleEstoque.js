"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProdutos = adicionarProdutos;
exports.removerProduto = removerProduto;
exports.listarProdutos = listarProdutos;
const serviceEstoque_1 = require("../service/serviceEstoque");
async function adicionarProdutos(data) {
    try {
        await serviceEstoque_1.estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }
    catch (error) {
        console.error("Erro ao adicionar produto:", error);
        throw error;
    }
}
async function removerProduto(nome) {
    try {
        await serviceEstoque_1.estoqueService.remover(nome);
        console.log("Produto removido com sucesso.");
    }
    catch (error) {
        console.error("Erro ao remover produto:", error);
        throw error;
    }
}
async function listarProdutos() {
    try {
        const todosProdutos = await serviceEstoque_1.estoqueService.listar();
        return todosProdutos;
    }
    catch (error) {
        console.error("Erro ao puxar a lista de todos os produtos:", error);
        throw error;
    }
}
