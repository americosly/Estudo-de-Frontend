const pessoa = {
    nome: 'Américo',
    idade: 27,
    peso: 130
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa). forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false,
    value: '11/01/1995'
})

pessoa.dataNascimento = '16/02/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


const destino = {a: 5}
const origem1 = {b: 6}
const origem2 = {a: 9, c: 4}
const obj = Object.assign(destino, origem1, origem2) // Object.assing esse comando ele concatena objetos

console.log(destino)

