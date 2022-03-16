function rand({min =0, max = 1000}) {
    const valor= Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 100, min:10}))

const obj = {max: 1000, min: 990}

console.log(rand(obj))
console.log(rand({min: 500, max:505}))