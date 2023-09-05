"use strict"

const contador = document.querySelector(".js-contador");

function letterCounter(){
  
    setTimeout(function(){
          var valor=document.getElementById('contador');
          var respuesta=document.getElementById('res');
          var cantidad=valor.value.length;
          document.getElementById('res').innerHTML = cantidad 
          
          
          });

}


function handleCounter(ev){
    ev.preventDefault();
    letterCounter();
    console.log("evento2");
}

contador.addEventListener("keyup", handleCounter );