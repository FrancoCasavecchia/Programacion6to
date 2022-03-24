var moneda = document.getElementById("selector1");
var moneda2 = document.getElementById("selectro2");

var arg = document.getElementById("arg");
var usd = document.getElementById("usd");
var eur = document.getElementById("eur");
var rea = document.getElementById("rea");
var chi = document.getElementById("chi");
var uru = document.getElementById("uru");

var cantidad1 = document.getElementById("cantidad1");


var boton_conversion = document.getElementById("boton_converison");
var resultado = document.getElementById("resultado");

function init(){

    boton_conversion.onclick() = function(e){
        convertir();
        
    }

}

function convertir(){
    var res = 0;
    switch(arg == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 1;
            res = resultado.textContent;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 150;
            res = resultado.textContent;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 112.47;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 17.50;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 13;
        case "uru":
            res = parseFloat(cantidad1) * 2.13;
            break;
    }
    switch(usd == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 150;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 1;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 0.83;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 5.35;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 705.10;
        case "uru":
            res = parseFloat(cantidad1) * 43.89;
            break;
    }
    switch(eur == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 112.5;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 1.20;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 1;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 6.43;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 846.79;
        case "uru":
            res = parseFloat(cantidad1) * 52.71;
            break;
    }
    switch(rea == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 17.49;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 0.19;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 0.16;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 1;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 131.70;
        case "uru":
            res = parseFloat(cantidad1) * 8.20;
            break;
    }
    switch(chi  == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 0.13;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 0.0014;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 0.0012;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 0.0076;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 1;
        case "uru":
            res = parseFloat(cantidad1) * 0.062;
            break;
    }
    switch(uru == moneda){
        case"arg":
            res= parseFloat(cantidad1) * 2.13;
            break;
        case"usd":
            res = parseFloat(cantidad1) * 0.023;
            break;
        case"eur":
            res = parseFloat(cantidad1) * 0.019;
            break;
        case"rea":
            res = parseFloat(cantidad1) * 0.12;
            break;
        case "chi":
            res = parseFloat(cantidad1) * 16.1;
        case "uru":
            res = parseFloat(cantidad1) * 1;
            break;
    }
    return res;
}
