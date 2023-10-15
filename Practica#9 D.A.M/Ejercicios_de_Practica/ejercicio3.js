//METODO FILTER//

let arrayNumeros = [2,3,8,20,9,13,17,23,24];
let arrayPrimos = arrayNumeros.filter( numero => {
  // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return numero;
})
console.log(arrayPrimos); 
//salida: [2, 3, 13, 17, 23]