// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'Arco'
}
const pai ={
    __proto__: avo,
    attr2: 'Bola',
}

const filho = {
    __proto__: pai,
    attr3: 'Carro'
}

console.log(filho.attr1)
console.log(pai.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 330
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(10)
console.log(ferrari.status())

volvo.acelerarMais(500)
console.log(volvo.status())