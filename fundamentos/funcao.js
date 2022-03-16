function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma (9, 8)


// função com retorno
function soma (a, b = 10){
    return (a + b)
}

console.log(soma(8))