const nombre = document.getElementById("name")
const grado = document.getElementById("grade")
const codigo = document.getElementById("code")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const nombres = document.getElementById("na")
const apellidoo = document.getElementById("ape")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    
    parrafo.innerHTML = ""
    
   
if(nombre.value.length <10){
    warnings +- `el nombre no es valido <br>`
    entrar = true
}
if(codigo.value.length <8){
    warnings +- `la contraseña no es valida <br>`
    entrar = true
}

if(entrar){
    parrafo.innerHTML = warnings
}
})