export function cadastrarUsuario(nome, cpf, email, senha){
    nome = prompt('Digite seu nome: ')
    cpf = prompt('Digite seu CPF: ')
    email = prompt('Digite seu email: ')
    senha = prompt('Digite sua senha: ')

    console.log(`Login efetuado com sucesso! seja bem-vindo(a): ${nome}`)
}