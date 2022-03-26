const carrinho = [
    '{"nome": "Caderno", "preco":22.69}',
    '{"nome": "Estojo", "preco":7.99}',
    '{"nome": "Lápis", "preco": 1.80}',
    '{"nome": "Caneta", "preco":2.99}'
]

const carrinhoBj = e => JSON.parse(e)
const preco1 = e => e.preco

const resultado = carrinho.map(carrinhoBj).map(preco1)

console.log(resultado)