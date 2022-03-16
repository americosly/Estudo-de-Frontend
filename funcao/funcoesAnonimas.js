const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log (operacao (a , b))
}

imprimirResultado(5, 6)
imprimirResultado(3, 4, soma)
imprimirResultado(6, 8, function (x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()