function compras (trabalho1 , trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv29 = trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv29, mantersaudavel}

}

console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(true, true))
console.log(compras(false, true))
