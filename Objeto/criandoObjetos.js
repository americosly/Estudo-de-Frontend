// usando a notação literal
const obj1 = {}
console.log(obj1)
    
// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funçoes construtoras
function produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Computador', 1999.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Amaro', 2500, 3)
console.log(f1.getSalario())

// Object create
const filha = Object.create(null)
filha.nome = 'Joana'
console.log(filha)

// JSON
const fromJSON = JSON.parse('{"info:" "Sou um JSON"}')
console.log(fromJSON.info)