/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dia;
var mes;
var año;
var diaMaximo;

function calcular_fecha(){
    var fecha=new Date();
    dia=fecha.getDate();
    mes=fecha.getMonth();
    año=fecha.getFullYear();
    
    var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana=new Array ("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo");
    var diasMes=new Array (31,28,31,30,31,30,31,31,30,31,30,31);
    diaMaximo=diasMes[mes];
    
    if(mes==1 && (((año%4==0) && (año%100!=0)) || (año%400==0))){ //Vemos si es bisiesto
        diaMaximo=29;
    }
    document.getElementById("textoAño").innerHTML=meses[mes]+" "+año;
    
    poner_fecha();
}

function poner_fecha(){
    
    for(i=1;i<=diaMaximo;i++){
        var div=document.createElement("div");
        div.id="div"+i;
        div.className="cuadrado";
        var labelDia=document.createElement("label");
        labelDia.id="label"+i;
        var textoDia=document.createTextNode(i);
        labelDia.appendChild(textoDia);
        div.appendChild(labelDia);
        var padre=document.getElementById("divTotal");
        padre.appendChild(div);
        
        if(i==dia){ //Si es el dia actual le cambiamos el color de fondo
            document.getElementById("div"+i).className="diaActual";
        }
    }
}

window.onload=calcular_fecha;
