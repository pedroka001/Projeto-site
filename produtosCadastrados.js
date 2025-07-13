export function mostrarProdutosCadastrados(listaDeProdutos) {
    if (!listaDeProdutos || listaDeProdutos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    listaDeProdutos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}:`);
        console.log(`Marca: ${produto.marca}`);
        console.log(`Tipo: ${produto.tipo}`);
        console.log(`Validade: ${produto.validade}`);
        console.log(`Preço: ${produto.preco}`);
        console.log('----------------------');
    });
}
