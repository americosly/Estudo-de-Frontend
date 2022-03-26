const numeros = [1 ,2 ,3 ,4 ,5]

let resultado = numeros.map(function(e){ // o comando .map ele criar um novo array utilizando como parâmetro um outro array que já exista no sistema.
    return e * 2
})

console.log(resultado)

const multiplo0 = e => e * 1.2

const soma = e => e + 20

const multiplo1 = e => e * 5

const cash = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(multiplo0).map(soma).map(multiplo1).map(cash)

console.log(resultado)