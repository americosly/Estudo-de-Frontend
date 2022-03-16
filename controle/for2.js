const notas = [7.7, 5.3, 9.9, 10, 4.8]

for (let i in notas) {
    console.log(i, notas [i])
}

const pessoa = {
    nome: 'Américo' ,
    sobrenome:'Travassos' ,
    idade: 27 ,
    sexo: 'Masculino'
}

for( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}