/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var div;
var padre;  
var alto;
var ancho;

function mover_circulos(){
    var colores=new Array("rojo","azul","negro");
    
    for(i=0;i<6;i++){
        var colorAleatorio=Math.floor((Math.random()*3)); //Hay que poner el Math.floor para que sea un numero entero en vez de un double        
        padre=document.getElementById("contenedorCirculos");
        div=document.createElement("div");
        div.className=colores[colorAleatorio];
        Ancho=Math.floor((Math.random()*1820)+1); //.offsetWidth y .offsetHeight para coger el ancho y el alto de un elemento
        Alto=Math.floor((Math.random()*650)+1);
        div.style.top=Alto+"px";  //Hay que poner el .style para acceder al CSS
        div.style.left=Ancho+"px";
        padre.appendChild(div); 
    }
    
    pulsar();
}

function mover(){
    var divs=document.getElementsByTagName("div");
    for(i=divs.length-1;i>=0;i--){
        var divss=document.getElementsByTagName("div")[i];
        var Ancho=Math.floor((Math.random()*1820)+1);
        var Alto=Math.floor((Math.random()*650)+1);
        divss.style.top=Alto+"px";  //Hay que poner el .style para acceder al CSS
        divss.style.left=Ancho+"px";
        padre.appendChild(divss); 
    }
}

function cambiarNegro(){
    var azules=document.getElementsByClassName("azul"); //Devuelve un array
    for(i=azules.length-1;i>=0;i--){ // Se pone el -1 para que empieze desde el 0 al usar el array por asi decirlo
       document.getElementsByClassName("azul")[i].className="negro";
    } 
}

function cambiarAzul(){
    var rojos=document.getElementsByClassName("rojo");
    for(i=rojos.length-1;i>=0;i--){
        document.getElementsByClassName("rojo")[i].className="azul";  //.classList.add(); sirve para añadir un class en vez de usar el className
    }
}

function pulsar(){
    document.getElementById("botonMover").onclick=mover;
    document.getElementById("botonNegro").onclick=cambiarNegro;
    document.getElementById("botonAzul").onclick=cambiarAzul;
}

window.onload=mover_circulos;


