/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var campos=document.getElementsByTagName("input");
var nombre="SERGIO";
var apellidos="GONZALEZ DIAZ";
var fecha;
var edad;
var ciudades=new Array("SALAMANCA","VALENCIA","MADRID");

function coger_datos(){
    for(i=0;i<campos.length-3;i++){
        var name=campos[0].value;
        var ap=campos[1].value;
        
        if(campos[i].value==""){
            campos[i].className="borderojo";
        }else{
            if(name.toUpperCase()==nombre && ap.toUpperCase()==apellidos){
                campos[0].className="nombreIgual";
            }
            fecha=campos[2].value;
            campos[i].className="bordeverde";
        }
        
        
    }
}

function enviar(){
    var titulo=document.getElementsByTagName("h1");
    var imagen=document.getElementsByTagName("img");
    var labels=document.getElementsByClassName("mostrar");
    var guardarNombre;
    var guardarApellidos;
    var contador=0;
    calcular_edad();
    for(i=0;i<campos.length-3;i++){
        if(campos[i].value!=""){
            guardarNombre=campos[0].value;
            guardarApellidos=campos[1].value;
            contador++;
            if(contador==5){
                var sections=document.getElementsByTagName("section");
                sections[0].className="esconderDiv";
                sections[1].className="mostrarDiv";
                for(j=0;j<labels.length;j++){
                    labels[0].innerHTML="Nombre: "+guardarNombre;
                    labels[1].innerHTML="Apellidos: "+guardarApellidos;
                    labels[2].innerHTML="Edad: "+edad;
                }
                if(campos[3].value.toUpperCase()==ciudades[0]){
                    titulo[0].className="esconderDiv";
                    imagen[0].className="mostrarDiv";
                    imagen[0].src="https://i.pinimg.com/originals/5b/a7/4f/5ba74f986e773245d330d07707e98b0b.jpg";
                }else if(campos[3].value.toUpperCase()==ciudades[1]){
                    titulo[0].className="esconderDiv";
                    imagen[0].className="mostrarDiv";
                    imagen[0].src="https://viajeando.files.wordpress.com/2013/09/ccartesvalencia.jpg";
                }else if(campos[3].value.toUpperCase()==ciudades[2]){
                    titulo[0].className="esconderDiv";
                    imagen[0].className="mostrarDiv";
                    imagen[0].src="https://d1bvpoagx8hqbg.cloudfront.net/originals/impress-madrid-6efcb1a8386dc624f75bf68fff068b7c.jpg";
                }else{
                    titulo[0].innerHTML=campos[3].value;
                }
            }
        }
    }
}


function calcular_edad(){
	var fecha_hoy = new Date();
	var ahora_ano = fecha_hoy.getFullYear();
	var ahora_mes = fecha_hoy.getMonth();
	var ahora_dia = fecha_hoy.getDate();
        
        var date=fecha.split("-");
        var ano=date[0];
        var mes=date[1];
        var dia=date[2];
        
	edad = ahora_ano - ano;
	
	if ( ahora_mes < (mes - 1)){
	  edad--;
	}
	if (((mes - 1) == ahora_mes) && (ahora_dia < dia)){ 
	  edad--;
	}
}

function limpiar(){
    for(i=0;i<campos.length-3;i++){
        campos[i].value="";
        campos[i].className="borde";
    }
}

function botones(){
    document.getElementById("reset").onclick=limpiar;
    document.getElementById("comprobar").onclick=coger_datos;
    document.getElementById("enviar").onclick=enviar;
}

window.onload=botones;

