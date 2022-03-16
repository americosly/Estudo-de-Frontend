const produto = new Object
produto.nome = 'Mouse'
produto['Marca do produto'] = 'Razer'
produto.preco = 289

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    Modelo: 'Astra 2001',
    preco: 13000,
    proprietario: {
        nome: 'Américo' ,
        sobrenome: 'Travassos',
        endereco: {
            Logradouro: 'Rua das belezas' ,
            numero: 29,
            bairro: 'Jd das belezas'
        }
    } ,
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro)