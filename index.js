"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controleEstoque_1 = require("./controller/controleEstoque");
const escrever = require('prompt-sync')({ sigint: true });
const main = async () => {
    try {
        var w = escrever('Digite a ação desejada: ');
        var acao = parseInt(w, 10);
        switch (acao) {
            case 1:
                var x = escrever('Digite o nome do produto: ');
                var y = escrever('Digite o peso do produto: ');
                var z = escrever('Digite o valor do produto: ');
                var q = escrever('Digite a quantidade do produto: ');
                const estoque = {
                    nome: x,
                    peso: parseFloat(y),
                    valor: parseFloat(z),
                    quantidade: parseInt(q, 10)
                };
                await (0, controleEstoque_1.adicionarProdutos)(estoque);
                break;
            case 2:
                var nomeBuscar = escrever('Digite o nome do produto: ');
                const produtoEncontrado = await (0, controleEstoque_1.obterProduto)(nomeBuscar);
                if (!produtoEncontrado) {
                    console.log("Produto não encontrado");
                }
                else {
                    console.log(`Nome:  ${produtoEncontrado.nome}`);
                    console.log(`Valor: R$ ${produtoEncontrado.peso}`);
                    console.log(`Peso:  ${produtoEncontrado.valor}g`);
                    console.log(`Quantidade: ${produtoEncontrado.quantidade}`);
                    const confirmar = escrever("tem certeza que quer excluir o arquivo(y/n): ");
                    if (confirmar == 'y') {
                        await (0, controleEstoque_1.removerProduto)(nomeBuscar);
                    }
                    else {
                        console.log("ação cancelada");
                    }
                }
                break;
            case 3:
                const todosProdutos = await (0, controleEstoque_1.listarProdutos)();
                if (todosProdutos.length == 0) {
                    console.log("Estoque vazio");
                }
                else {
                    todosProdutos.forEach((produto) => {
                        console.log(`----------------------------------------`);
                        console.log(`Nome:  ${produto.nome}`);
                        console.log(`Valor: R$ ${produto.peso}`);
                        console.log(`Peso:  ${produto.valor}g`);
                        console.log(`Quantidade: ${produto.quantidade}`);
                        console.log(`----------------------------------------\n`);
                    });
                }
                break;
            case 4:
                const todosOsProdutos = await (0, controleEstoque_1.listarProdutos)();
                const valorTotal = todosOsProdutos.reduce((soma, produto) => {
                    const valor = parseFloat(String(produto.valor));
                    const quantidade = parseInt(String(produto.quantidade), 10);
                    return soma + (valor * quantidade);
                }, 0);
                console.log(`O valor total de todos os produtos em estoque é: R$${valorTotal},00`);
                break;
            case 5:
                const pesoProdutos = await (0, controleEstoque_1.listarProdutos)();
                const valorTotalPeso = pesoProdutos.reduce((soma, produto) => {
                    const valor = parseFloat(String(produto.peso));
                    const quantidade = parseInt(String(produto.quantidade), 10);
                    return soma + (valor * quantidade);
                }, 0);
                console.log(`O peso total de todos os produtos em estoque é: ${valorTotalPeso}kg`);
            case 6:
                const MediaTodosProdutos = await (0, controleEstoque_1.listarProdutos)();
                const valorTotalProduto = MediaTodosProdutos.reduce((soma, produto) => {
                    const valor = parseFloat(String(produto.valor));
                    const quantidade = parseInt(String(produto.quantidade), 10);
                    return soma + (valor * quantidade);
                }, 0);
                const PesoTotalProduto = MediaTodosProdutos.reduce((soma, produto) => {
                    const quantidade = parseInt(String(produto.quantidade), 10);
                    return soma + (quantidade);
                }, 0);
                const mediaPonderada = valorTotalProduto / PesoTotalProduto;
                console.log(`A media do valor de todos os produtos em estoque é: R$${mediaPonderada}.2f,00`);
        }
    }
    catch (error) {
        console.error("Erro detectado:", error);
    }
};
main();
