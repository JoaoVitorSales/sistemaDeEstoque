"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProdutos = adicionarProdutos;
exports.removerProduto = removerProduto;
exports.obterProduto = obterProduto;
exports.listarProdutos = listarProdutos;
const serviceEstoque_1 = require("../service/serviceEstoque");
async function adicionarProdutos(data) {
    try {
        await serviceEstoque_1.estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }
    catch (error) {
        throw error;
    }
}
async function removerProduto(nome) {
    try {
        await serviceEstoque_1.estoqueService.remover(nome);
        console.log("Produto removido com sucesso.");
    }
    catch (error) {
        throw error;
    }
}
async function obterProduto(nome) {
    try {
        const produto = await serviceEstoque_1.estoqueService.buscarNome(nome);
        return produto;
    }
    catch (error) {
        throw error;
    }
}
async function listarProdutos() {
    try {
        const todosProdutos = await serviceEstoque_1.estoqueService.listar();
        return todosProdutos;
    }
    catch (error) {
        throw error;
    }
}
