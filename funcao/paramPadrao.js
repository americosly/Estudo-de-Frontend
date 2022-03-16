function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(0, 0, 0))

// valor padrão do es2015
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2())
console.log(soma2(5, 5, 5))