const variable1 = document.querySelector("#calculo1")
const variable2 = document.querySelector("#calculo2")
const boton = document.querySelector("#botonCalcular")
const presult = document.querySelector("#result")
 
function producto(){
 let prod = Number(variable1.value) * Number(variable2.value)
 presult.innerHTML = "resultado: " + prod;
}