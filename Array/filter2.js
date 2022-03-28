Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i  < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2999, fragil: true},
    {nome: 'Tv 59 Polegadas', preco: 3599, fragil: true},
    {nome: 'Livro', preco: 98, fragil: false},
    {nome: 'Blusa preta', preco: 236, fragil: true}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))