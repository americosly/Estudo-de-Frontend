const aprovados = ["Américo","Kevin", "Beatriz", "Carlos", "Ana"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const funAprovados = aprovados => console.log(aprovados)

aprovados.forEach(funAprovados)