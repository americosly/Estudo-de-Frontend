// o navegador de internet carrega todas as funções declaration antes, por conta disso é possivel chamar a função antes mesmo dela ter sido declarada no codigo.

console.log(soma(2, 9))

// function declaration
function soma(x,y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult (x, y) {
    return x * y
}