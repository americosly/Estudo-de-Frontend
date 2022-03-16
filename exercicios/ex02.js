function classTriangulo(a, b, c) {
    if(a === b && b == c){
        return 'O seu triângulo é Equilátero!'
    } else if (a != b && a == c || b != c && b == a || c == b && c !=a) {
        return 'O seu triângulo é Isósceles!'
    } else{
        return 'O seu triangulo é Escaleno'
    }
}

console.log(classTriangulo(11,1,21))