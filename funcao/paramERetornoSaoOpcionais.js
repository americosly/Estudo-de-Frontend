function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(` Valor a cima do permitido: ${area}M2.`)
    } else {
        return area
    }
}

console.log(area(50,2))