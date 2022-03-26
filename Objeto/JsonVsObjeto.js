 const obj= {
     a: 1,
     b: 2,
     c: 3,
     soma(){
         return a + b + c
     }
 }

 console.log(JSON.stringify(obj))

 // console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) os atributos de um JSON devem ser com aspas duplas.

 console.log(JSON.parse('{"a": 1, "b": 2, "b": 3}'))