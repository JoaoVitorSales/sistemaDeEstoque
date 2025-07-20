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
                var nomeRemover = escrever('Digite o nome do produto: ');
                await (0, controleEstoque_1.removerProduto)(nomeRemover);
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
        }
    }
    catch (error) {
        console.error("Erro detectado:", error);
    }
};
main();
