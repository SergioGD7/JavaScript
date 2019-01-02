/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var input;
var opcion;
var posicion;

function coger_datos(){
    input=document.getElementsByTagName("input");
    opcion=input[0].value;
    posicion=input[1].value;
    
    crearLista();
}

function crearLista(){
    var unlist=document.getElementsByTagName("ul")[0];
    var list=document.createElement("li");
    var texto=document.createTextNode(opcion);
    var enlace=document.createElement("a");
    unlist.appendChild(list);
    list.appenChild(enlace);
    enlace.href="";
    enlace.appendChild(list);
    
}

function boton(){
    input[2].onclick=coger_datos;
}

