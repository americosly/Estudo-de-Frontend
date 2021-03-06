const produtos = [
    {nome: 'Notebook', preco: 2999, fragil: true},
    {nome: 'Tv 59 Polegadas', preco: 3599, fragil: true},
    {nome: 'Livro', preco: 98, fragil: false},
    {nome: 'Blusa preta', preco: 236, fragil: true}
]

console.log(produtos.filter(function(p) {
    return p.fragil == false
}))

console.log(produtos.filter(function(p) {
    return p.preco >= 500 & p.fragil == true
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))