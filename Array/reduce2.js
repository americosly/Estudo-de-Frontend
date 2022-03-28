const alunos = [
    {nome: 'Américo',  nota: 8.9, bolsista:true},
    {nome: 'Ana',  nota: 6.9, bolsista:true},
    {nome: 'João',  nota: 4.9, bolsista:true},
    {nome: 'Amanda',  nota: 9.9, bolsista:false}
]


// Desafio 1: todos os alunos são bolsistas?

const resultado1 = alunos.map(a => a.bolsista).reduce(function (b, c) {
    return b && c 
}, )

console.log(resultado1)

// Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.map(a => a.bolsista).reduce(function (b, c) {
    return b || c
}, )

console.log(resultado2)