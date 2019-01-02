/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var bola;
var valorPuntos=0;
var intervaloColor=setInterval(cambiar_color,1200);
var intervaloPosicion=setInterval(mover_bola,1200);

function mover_bola(){
    var divBola=document.getElementById("cuadro");
    bola=document.getElementById("bola");
    
    var anchoDiv=divBola.offsetWidth; //1906
    var altoDiv=divBola.offsetHeight; //857
    var altoBola=bola.offsetTop; //Para ir cogiendo la posicion vertical de la bola
    altoBola+=20;
    var anchoAleatorio=Math.floor((Math.random()*1806));
    
    bola.style.left=anchoAleatorio+"px";
    bola.style.top=altoBola+"px";
    
    if(altoBola>769){
        clearInterval(intervaloPosicion);
        clearInterval(intervaloColor);
        bola.style.visibility="hidden";
    }
    
}

function cambiar_color(){
    var colores=new Array("azul","rojo","verde","negro","naranja","amarillo");
    
    var colorAleatorio=Math.floor((Math.random()*6));
    bola=document.getElementById("bola");
    bola.className=colores[colorAleatorio];
    
    if(colores[colorAleatorio]!=="negro"){
        bola.addEventListener("click",pulsar);
    }else{
        bola.removeEventListener("click",pulsar);
    }
    
}

function pulsar(){
    var puntos=document.getElementById("cuadroPuntos");
    valorPuntos+=1;
    
    puntos.innerHTML=valorPuntos;
}


