export class CadastrarProdutos{
    constructor(marca, tipo, validade, preco){
        this.marca = marca
        this.tipo = tipo
        this.validade = validade
        this.preco = preco
    }
    cadastrarProdutos(){
        this.marca = prompt('Digite a marca do produto: ')
        this.tipo = prompt('Digite o tipo  do produto: ')
        this.validade = prompt('Digite a validade do produto (se não houver validade, não preencha.): ')
        this.preco = prompt('Digite o preço do produto: ')
    }
}