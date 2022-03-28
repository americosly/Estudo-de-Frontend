const alunos = [
    {nome: 'Américo',  nota: 8.9, bolsista:false},
    {nome: 'Ana',  nota: 6.9, bolsista:true},
    {nome: 'João',  nota: 4.9, bolsista:false},
    {nome: 'Amanda',  nota: 9.9, bolsista:true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)