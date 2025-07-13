export function cadastrarUsuario() {
    const nome = prompt('Digite seu nome: ');
    const cpf = prompt('Digite seu CPF: ');
    const email = prompt('Digite seu email: ');
    const senha = prompt('Digite sua senha: ');

    console.log(`Login efetuado com sucesso! Seja bem-vindo(a), ${nome}!`);
}