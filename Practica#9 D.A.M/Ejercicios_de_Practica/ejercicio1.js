//METODO FOREACH//

let numberArray = [1, 2, 3, 4, 5];

let returnValue = numberArray.forEach(num => 
  console.log(`${num} x ${num} = ${num * num}`)
);

console.log(numberArray);
console.log(returnValue);