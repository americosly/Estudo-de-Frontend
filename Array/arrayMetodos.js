const pilotos = ['Max Verstappen', 'Lewis Hamilton','Carlos Sainz', 'Kevin Magnussen', 'Daniel Ricciardo' ]
pilotos.pop() // .pop retira o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Fernando Alonso') // . push adiciona um novo elemento no array
console.log(pilotos)

pilotos.shift() // .shift remove um elemento
console.log(pilotos)

pilotos.unshift('George Russell') // .unshift adiciona um elemento no inicio o array
console.log(pilotos)

// adicionando elementos com splice
pilotos.splice(2, 0, "Valtteri Bottas", "Sergio Pérez") // a funçao splice pode remover a edicionar elementos em um array.
console.log(pilotos)

// removento elementos com splice
pilotos.splice(4, 1)
console.log(pilotos)

const novoGrid = pilotos.slice(2) // O slice cria um novo array apartir da posição do array informada
console.log(novoGrid)
