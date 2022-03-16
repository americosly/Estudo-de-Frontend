const pessoa = {
    nome: 'Américo',
    idade: 26,
    endereco:{
        logradouro: 'Rua das belezas',
        numero: 349
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)