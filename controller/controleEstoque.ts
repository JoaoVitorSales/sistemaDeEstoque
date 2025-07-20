import { Data } from '../model/interfaceData';
import { estoqueService } from '../service/serviceEstoque';

export async function adicionarProdutos(data:Data) {
    try{
        await estoqueService.criar(data);
        console.log("Produto adicionado com sucesso.");
    }catch(error){
        console.log("Erro ao adicionar produto:", error);
    }
}