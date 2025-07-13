export class CadastrarProdutos {
  constructor(marca, tipo, validade, preco) {
      this.marca = marca;
      this.tipo = tipo;
      this.validade = validade;
      this.preco = preco;
  }

  cadastrarProdutosManual() {
      this.marca = prompt('Digite a marca do produto: ');
      this.tipo = prompt('Digite o tipo do produto: ');
      this.validade = prompt('Digite a validade do produto (se não houver validade, deixe em branco): ');
      this.preco = prompt('Digite o preço do produto: ');
  }
}

const fs = require('fs');
const csv = require('csv-parser');

export const produtosImportados = [];

fs.createReadStream('produtos.csv')
.pipe(csv())
.on('data', (row) => {
  produtosImportados.push(new CadastrarProdutos(
    row.marca,
    row.tipo,
    row.validade,
    row.preco
  ));
})
.on('end', () => {
  console.log('CSV lido com sucesso!');
  console.log('Produtos importados:', produtosImportados);
});