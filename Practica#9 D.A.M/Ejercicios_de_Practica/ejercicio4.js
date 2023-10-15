//METODO REDUCE//

// suma todo el array
const total = [0, 1, 2, 3].reduce((a, b) => a + b);
console.log(total);
// 6
 
// Integrar un array a partir de varios arrays
const integrado = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b));
console.log(integrado);
// [0, 1, 2, 3, 4, 5, 6]
 
// Sumatorio todos los valores del objeto
const arr = [{ x: 1 }, { x: 2 }, { x: 4 }];
const result = arr.reduce((a, b) => ({ x: a.x + b.x }));
console.log(result);
// {x: 7}