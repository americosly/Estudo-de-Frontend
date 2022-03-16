const saudacao = 'Olá' // contexto léxico 1

function exec () {
    const saudacao = 'tudo bem?' // contexto léxico 2
    return saudacao
}



const cliente = {
    nome: 'Américo',
    idade: 26,
    endereco: {
        logradouro: 'Rua das belezas',
        numero: 349
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)