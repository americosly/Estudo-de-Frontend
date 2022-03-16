const prod = {}
prod.nome = "Celular Nokia model F"
prod.preco = 899.99
prod['Desconto legal'] = 50.00 // Dentro de um objeto é possivel criar nome de objeto com espaço igual ao exemplo ao lado. Porém não é uma boa pratica.

console.log (prod)

const prod2 = { //Aqui é outra maneira de criar um objeto. Aqui devemos usar o : ao inves de  = para dar atribuições aos objetos.
    nome: 'Camiseta azul',
    preco: 79.99 ,  // Sempre que for adicionar um novo objeto deve ser colocado a virgula "," 
    obj: {
        marca: "C&A" // Dentro de um objeto podemos ter um objetivo dentro do outro.
    }
}

console.log(prod2)