const pai = {
    nome: 'Roseildo',
    corCabelo: 'Preto',
}

const filha = Object.create(pai)
filha.nome = 'Yolanda'
console.log(filha.corCabelo)
console.log(filha.nome)

const filho = Object.create(pai, {
    nome: {
        value: 'Américo', 
        writable: false, 
        enumerable: true
    }
})

console.log(filho.nome)

filho.nome = 'Carlos'
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho)) 

for (let key in filho) {
    filho.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}


