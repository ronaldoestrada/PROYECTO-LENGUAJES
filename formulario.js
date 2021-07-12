const formulario = document.getElementById("form-reg");
const inputs = document.querySelectorAll('#form-reg input')

const expresiones = {
	nombres: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


var re=/[a-z]/
function sololetras(event){
    if (event.keyCode >47 && event.keyCode  <58) event.returnValue = false;
 } 
 function solonumeros(event){
    if (event.keyCode >64 && event.keyCode  <123) event.returnValue = false;
 }