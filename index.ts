import { Data } from './model/interfaceData';
import { adicionarProdutos, removerProduto, listarProdutos, obterProduto } from './controller/controleEstoque';

const escrever = require('prompt-sync')({sigint: true});


const main = async () => {
    try {
        var w = escrever('Digite a ação desejada: ');
        var acao = parseInt(w, 10);

        switch(acao){
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
                } as Data

                await adicionarProdutos(estoque);
                break;

            case 2:

                var nomeBuscar = escrever('Digite o nome do produto: ');
                const produtoEncontrado = await obterProduto(nomeBuscar);
                if(!produtoEncontrado){
                    console.log("Produto não encontrado");
                }else{
                    console.log(`Nome:  ${produtoEncontrado.nome}`);
                    console.log(`Valor: R$ ${produtoEncontrado.peso}`);
                    console.log(`Peso:  ${produtoEncontrado.valor}g`);
                    console.log(`Quantidade: ${produtoEncontrado.quantidade}`);
                    const confirmar = escrever("tem certeza que quer excluir o arquivo(y/n): ");
                    if(confirmar == 'y'){
                    await removerProduto(nomeBuscar);
                    }else{
                        console.log("ação cancelada");
                    }
                }
                
                break;
            
            case 3:
                const todosProdutos = await listarProdutos();
                if(todosProdutos.length == 0){
                    console.log("Estoque vazio");
                }else{
                    todosProdutos.forEach((produto) => {
                        console.log(`----------------------------------------`)
                        console.log(`Nome:  ${produto.nome}`);
                        console.log(`Valor: R$ ${produto.peso}`);
                        console.log(`Peso:  ${produto.valor}g`);
                        console.log(`Quantidade: ${produto.quantidade}`);
                        console.log(`----------------------------------------\n`)
                    })
                }
                break;
            
            case 4:
                const todosOsProdutos = await listarProdutos();
                const valorTotal = todosOsProdutos.reduce((soma, produto) => {

                    const valor = parseFloat(String(produto.valor));
                    const quantidade = parseInt(String(produto.quantidade), 10);

                    return soma + (valor * quantidade);
                }, 0);
                console.log(`O valor total de todos os produtos em estoque é: R$${valorTotal},00`);

                break;

            case 5:
                const pesoProdutos = await listarProdutos();
                const valorTotalPeso = pesoProdutos.reduce((soma, produto) => {

                    const valor = parseFloat(String(produto.peso));
                    const quantidade = parseInt(String(produto.quantidade), 10);

                    return soma + (valor * quantidade);
                }, 0);
                console.log(`O peso total de todos os produtos em estoque é: ${valorTotalPeso}kg`);

            case 6:
                const mediaTodosProdutos = await listarProdutos();

                const valorTotalProduto = mediaTodosProdutos.reduce((soma, produto) => {

                    const valor = parseFloat(String(produto.valor));

                    return soma + (valor);
                }, 0);

                const pesoTotalProduto = mediaTodosProdutos.reduce((soma, produto) => {
                    const quantidade = parseInt(String(produto.quantidade), 10);

                    return soma + (quantidade);
                }, 0);

                const mediaValor = valorTotalProduto / pesoTotalProduto;
                console.log(`A media do valor de todos os produtos em estoque é: R$${mediaValor},00`);
                break;

            case 7:
                const mediaPesoProdutos = await listarProdutos();

                const pesoMediaProduto = mediaPesoProdutos.reduce((soma, produto) => {

                    const peso = parseFloat(String(produto.peso));

                    return soma + (peso);
                }, 0);

                const quantidadeMediaProduto = mediaPesoProdutos.reduce((soma, produto) => {
                    const quantidade = parseInt(String(produto.quantidade), 10);

                    return soma + (quantidade);
                }, 0);

                const mediaPeso = pesoMediaProduto / quantidadeMediaProduto;
                console.log(`A media do peso de todos os produtos em estoque é: ${mediaPeso}kg`);
                break;
            
            case 8:
                const itemTotal = await listarProdutos();
                const quantidadeTotal = itemTotal.reduce((soma, produto) => {
                    const quantidade = parseInt(String(produto.quantidade), 10);

                    return soma + (quantidade);
                }, 0);
                console.log(`A quantidade de produtos em estoque é: ${quantidadeTotal}`);
                break;
            
            case 9:
                const itemEspecificosTotal = await listarProdutos();
                console.log(`A quantidade de produtos em estoque é: ${itemEspecificosTotal.length}`);
    }
}catch(error){
    console.error("Erro detectado:", error);
}}
main();

