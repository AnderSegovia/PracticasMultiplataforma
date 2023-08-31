const bitacora =[
    {
        id: 1,
        titulo:'Registro',
        detalles: {
            hora: '10:00am',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual:{
                    id: 1,
                    nombres: 'Juan',
                    apellidos:'Hernandez',
                }
            },
        },
        descripcion: 'se ingresaron nuevos datos a la tabla personas'
    },
    {
        id: 2,
        titulo:'Modificacion',
        detalles: {
            hora: '11:00am',
            fecha: '12 de agosto de 2023',
            campos: {
                anterior: [
                    {
                    id: 1,
                    nombres: 'Juan',
                    apellidos:'Hernandez',
                }
                ],
            actual:{
                id: 1,
                    nombres: 'Juan Carlos',
                    apellidos:'Hernandez',
                }
            },
        },
        descripcion: 'se ingresaron nuevos datos a la tabla personas'
    },
]

 for ( const  {titulo , detalles: {fecha, hora}, descripcion} of bitacora ){
 console.log(titulo , fecha , hora , descripcion)
 }

 function desem ([{titulo}]){
    return `${titulo}`
}
 console.log(desem(bitacora))

 let [, {detalles: {campos : {anterior, actual}}}]= bitacora
 console.log(anterior)
 console.log(actual)
 