/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const abecedario = "1234567890abcdefghijklmnñopqrstuvwxyzç., ";
const querty = "1234567890qwertyuiopasdfghjklñzxcvbnmç., ";
 
const idLetras=document.getElementById("letras2");
const idDisposicionTeclado=document.getElementById("disposicionTeclado");
 

const mostrarLetras = listadoLetras => {
    idLetras.innerHTML="";
    
    listadoLetras.split('').map(el => {
        let span=document.createElement("span");
        span.addEventListener("click", teclaPulsada);
        span.innerText=el;
        if (el==" ") {
            span.classList.add("space");
        }
        idLetras.appendChild(span);
    });
}
mostrarLetras(querty);
 
function teclaPulsada(e) {
    const tecla=this.classList && this.classList.contains("space") ? " " : this.innerText;
    if (abecedario.indexOf(tecla)>=0) {
        document.getElementById("texto").value+=tecla;
    }
}
 

Array.from(idDisposicionTeclado.querySelectorAll("span")).map(el => el.addEventListener("click", 
function() {

    Array.from(idDisposicionTeclado.querySelectorAll("span")).map(el => el == this ? this.classList.add("selected") : el.classList.remove("selected"));
    mostrarLetras(eval(this.innerText.toLowerCase()));
}));

