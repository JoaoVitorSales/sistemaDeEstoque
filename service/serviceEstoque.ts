import fs from 'fs';
import { readCSV } from "../model/readCSV";
import { writeCSV } from "../model/writeCSV";
import { Data } from "../model/interfaceData";

const filePath = './model/estoque.csv'

export class EstoqueService{
    async criar(data: Data){
        if(typeof data.nome !== 'string' || isNaN(data.valor) || isNaN(data.peso) || isNaN(data.quantidade)){
            throw new Error('dados invalidos para o produto');
        }
        await writeCSV(filePath, [data] );
    }
}

export const estoqueService = new EstoqueService();
