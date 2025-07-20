import { Data } from '../model/interfaceData';
import { estoqueService } from '../service/serviceEstoque';

export async function adicionarProdutos(data:Data) {
    try{
        await estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }catch(error){
        console.error("Erro ao adicionar produto:", error);
        throw error;
    }
}

export async function removerProduto(nome:string) {
    try{
        await estoqueService.remover(nome);
        console.log("Produto removido com sucesso.");
    }catch(error){
        console.error("Erro ao remover produto:", error);
        throw error;
    }
}

export async function listarProdutos() {
    try{
        const todosProdutos = await estoqueService.listar();
        return todosProdutos;
    }catch(error){
        console.error("Erro ao puxar a lista de todos os produtos:", error);
        throw error;
    }
}