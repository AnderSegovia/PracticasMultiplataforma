//Ejercicio 2

const personas = [
    {nombre: 'Esmeralda', edad: 25},
    {nombre: 'Vanessa', edad: 24},
    {nombre: 'Anderson', edad: 23},
    {nombre: 'Irving', edad: 22},
    {nombre: 'Stiven', edad: 21}
    ]
    
    const adultos = personas.filter(function (person) {
        return person.edad > 18
    })
    console.log(adultos)