import { cadastrarUsuario } from "./cadastrarUsuario.js";
import { CadastrarProdutos, produtosImportados } from "./cadastrarProdutos.js";
import { mostrarProdutosCadastrados } from "./produtosCadastrados.js";

cadastrarUsuario();

const novoProduto = new CadastrarProdutos();
novoProduto.cadastrarProdutosManual();

mostrarProdutosCadastrados([novoProduto]);

setTimeout(() => {
    mostrarProdutosCadastrados(produtosImportados);
}, 2000);