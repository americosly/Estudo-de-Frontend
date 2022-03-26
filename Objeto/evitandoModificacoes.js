
const produto = Object.preventExtensions({ // usando o preventExtensions envita que novos objetos sejam criados
    nome: "Água",
    preco: 1.99,
    tag: 'promoção'
})

console.log(produto)

produto.nome = 'Café'
produto.marca = 'Pelé'
delete produto.tag
console.log(produto)

const pessoa = {
    nome:'Américo',
    idade: 27
}
Object.seal(pessoa) // Usando o seal impede que os objetos sejam excluídos ou adicionados.

console.log(pessoa)

pessoa.nome= 'Ana'
pessoa.idade= 28
delete pessoa.idade

console.log(pessoa)

const carro = {
    modelo: 'Astra',
    ano: 2001
}
Object.freeze(carro) // Usando freeze o objeto se torna constante, não é possivel alterar, adiconar ou excluir elementos.

carro.modelo= 'Vectra'
carro.velocidade= 230
carro.ano= 2015

console.log(carro)

