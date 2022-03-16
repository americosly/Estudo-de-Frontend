function valorReal(valor) {
    let real = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(real)
}

valorReal(5.500 + 0.25)