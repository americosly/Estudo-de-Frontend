const pessoa = { nome: 'Pedro' }
pessoa.nome = 'Américo'
console.log(pessoa)


// O comando de Object.freeze ele congela o objeto e não é possivel mais alterar ou excluir as informações do objeto.
Object.freeze(pessoa)

pessoa.nome = 'Marcos'
pessoa.end = 'Rua da vida'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)


// É possivel criar um objeto já com o freeze
const pessoaConstante = Object.freeze({nome:'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)