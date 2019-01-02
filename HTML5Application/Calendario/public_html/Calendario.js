/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dia;
var mes;
var ano;

function fecha_actual(){
    var fecha=new Date();
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); //Se debe poner entre paréntesis para que funcione.
    dia=fecha.getDate();
    mes=meses[fecha.getMonth()];
    ano=fecha.getFullYear();
    
    poner_fecha();
}

function poner_fecha(){
    document.getElementById("dia").innerHTML=dia;
    document.getElementById("mes").innerHTML=mes;
    document.getElementById("año").innerHTML=ano;
}

window.onload=fecha_actual;

