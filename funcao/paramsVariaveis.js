function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, ' teste'))
console.log(soma(1, 2.5, 8.9))