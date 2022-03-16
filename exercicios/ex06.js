function calculadora(a, b, c) {
    switch (b) {
        case '+':
           return a + c 
        case '-':
           return a - c
        case '*':
            return a * c
        case '/':
            return a / c
        default:
            return 'Operação invalida!'

    }
}

console.log(calculadora(50,'*',10))