function meuNome(nome){
    this.nome = nome
    
    this.falar = function() {
     console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new meuNome('Américo')
p1.falar()