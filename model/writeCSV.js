"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCSV = void 0;
const csv_writer_1 = require("csv-writer");
const writeCSV = async (filePath, data) => {
    const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
        path: filePath,
        header: [
            { id: 'nome', title: 'nome' },
            { id: 'peso', title: 'peso' },
            { id: 'valor', title: 'valor' },
            { id: 'quantidade', title: 'quantidade' },
        ]
    });
    return csvWriter.writeRecords(data);
};
exports.writeCSV = writeCSV;
