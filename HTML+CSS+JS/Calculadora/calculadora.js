var operandoa;
var operandob;
var operacion;



function init(){

    //primera fila
    var resultado = document.getElementById("resultado" );

    //segunda fila
    var siete = document.getElementById("siete" );
    var ocho = document.getElementById("ocho" );
    var nueve = document.getElementById("nueve" );
    var div = document.getElementById("div" );

    siete.onclick = function(e){
        resultado.textContent  = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent  = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent  = resultado.textContent + "9";
    }
    div.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    //tercera fila
    var cuatro = document.getElementById("cuatro" );
    var cinco = document.getElementById("cinco" );
    var seis = document.getElementById("seis" );
    var mult = document.getElementById("mult" );

    cuatro.onclick = function(e){
        resultado.textContent  = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent  = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent  = resultado.textContent + "6";
    }
    mult.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    //cuarta fila
    var uno = document.getElementById("uno" );
    var dos = document.getElementById("dos" );
    var tres = document.getElementById("tres" );
    var resta = document.getElementById("resta" );

    uno.onclick = function(e){
        resultado.textContent  = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent  = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent  = resultado.textContent + "3";
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    //quinta fila
    var cero = document.getElementById("cero" );
    var reset = document.getElementById("reset" );
    var igual = document.getElementById("igual" );
    var suma = document.getElementById("suma" );

    cero.onclick = function(e){
        resultado.textContent  = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resete();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }



}

function limpiar(){
    resultado.textContent = " ";
}
function resete(){
    resultado.textContent = " ";
    operandoa = 0;
    operandob = 0;
    operacion = " ";
}
function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resete();
    resultado.textContent = res;
}
