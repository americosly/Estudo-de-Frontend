/* const prod1 = {
    nome: 'Esponja'
    preco: 1,50
}

const prod2 = {
    nome: 'Detergente'
    preco: 1,99
} */

//  Função factory é uma função que sempre retorna um novo objeto ou uma nova função

function criarProduto(a,b) {
    return{
        nome: a,
        preco: b,
        desconto: 0.1
    }
}

console.log(criarProduto('Esponja', 1.99))
console.log(criarProduto('Detergente', 2.99))