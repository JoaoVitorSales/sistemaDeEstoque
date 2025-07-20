import fs from 'fs';
import { readCSV } from "../model/readCSV";
import { writeCSV } from "../model/writeCSV";
import { Data } from "../model/interfaceData";

const filePath = './model/estoque.csv'

export class EstoqueService{
    async criar(data: Data){
        const produtosAtuais = await readCSV(filePath);
        if(typeof data.nome !== 'string' || isNaN(data.valor) || isNaN(data.peso) || isNaN(data.quantidade)){
            throw new Error('dados invalidos para o produto');
        }
        produtosAtuais.push(data);
        await writeCSV(filePath, produtosAtuais );
    }

    async remover(nomeProduto: string){
        const produtosNoSistema = await readCSV(filePath);
        const sistemaAtualizado = produtosNoSistema.filter((produto) => produto.nome !== nomeProduto);
        if(produtosNoSistema.length === sistemaAtualizado.length){
            throw new Error('Produto não encontrado no estoque');
        }
        await writeCSV(filePath, sistemaAtualizado);
    }

    async listar(){
        return await readCSV(filePath);
    }
}

export const estoqueService = new EstoqueService();
