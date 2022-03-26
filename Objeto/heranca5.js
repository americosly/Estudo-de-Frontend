function Aula(nome, video) {
    this.nome = nome,
    this.video = video
}

const aula01 = new Aula("Matemática", "Matemática básica!")
const aula02 = new Aula("História", "História sobre a segunda guerra mundial." )

console.log(aula01, aula02)

// simulando a função new

function novo(f,...params) {
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj, params)
    return obj
}

const aula03 = novo(Aula, "Artes", "Arte moderna.")

console.log(aula03)