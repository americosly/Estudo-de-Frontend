const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma (50,90)


// Armazenamento de função através do arrow (Flecha)

const soma = (a, b) => {
    return a + b
}

console.log(soma(5,9))


// retorno implicito, aqui não é preciso abrir as chaves para esta função pois ela tem apenas uma sentença de codigo

const subtracao = (a, b) => a - b

console.log(subtracao(5,3))