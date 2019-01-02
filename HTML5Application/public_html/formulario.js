/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre;
var apellidos;
var edadString;
var edad;

function recoger_datos(){
	nombre=document.getElementById("nombre").value;
	apellido1=document.getElementById("apellidos").value;
	edadString=document.getElementById("edad").value;
        
	verificarCampos();
}

function verificarCampos(){
    if(nombre!="" && apellidos!="" && edadString!=""){
        mostrar_datos();
    }else{
        alert("Debes rellenar todos los campos");
    }
}

function mostrar_datos(){
    if(isNaN(edadString)==false){
        edad=parseInt(edadString); //Pasar el número a entero
        if(edad>=18){
            document.getElementById("boton").style.background="green"; //Es mejor poner .className="" para llamar a un .class del CSS en vez de usar el .style
        }else{
            document.getElementById("boton").style.background="red";
        }
    }
}

function usarBoton(){
    document.getElementById("boton").onclick=recoger_datos;
}
window.onload=usarBoton;

