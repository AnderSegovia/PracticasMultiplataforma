const libros = ["libro1","libro2","lb"]

const btnAgregar = document.querySelector("#btnAgregar")

const libro = document.querySelector("#libro")

const ListaLibro = document.querySelector("#misLibros")

btnAgregar.addEventListener("click", () =>{
if(libros.includes(libro.value)){
alert("ya existe")
}else{
    libros.push(libro.value)

}
mostrarLibros()
})

function mostrarLibros(){
ListaLibro.innerHTML= null
libros.forEach((item, index) => {
ListaLibro.innerHTML +=
`<li> ${item} - <button type="button" onclick="prestarLibro(${index})">Prestar </button> 
</li>`
})
}

function prestarLibro(index){
libros.splice(index,1)
console.log(libros)
mostrarLibros()
alert("Se presto un Libro")
}

mostrarLibros()