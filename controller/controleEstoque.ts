import { Data } from '../model/interfaceData';
import { estoqueService } from '../service/serviceEstoque';

export async function adicionarProdutos(data:Data) {
    try{
        await estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }catch(error){
        throw error;
    }
}

export async function removerProduto(nome:string) {
    try{
        await estoqueService.remover(nome);
        console.log("Produto removido com sucesso.");
    }catch(error){
        throw error;
    }
}

export async function obterProduto(nome: string) {
  try {
    const produto = await estoqueService.buscarNome(nome);
    return produto;
  } catch (error) {
    throw error;
  }
}

export async function listarProdutos() {
    try{
        const todosProdutos = await estoqueService.listar();
        return todosProdutos;
    }catch(error){
        throw error;
    }
}